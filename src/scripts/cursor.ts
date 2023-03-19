class CursorTrail {
  speed = 0.1;
  outlineSize = 0;

  mouse: { x: number; y: number } = { x: 0, y: 0 };
  trail: { x: number; y: number } = { x: 0, y: 0 };

  timeoutId: number | null = null;
  $trail: HTMLDivElement;

  constructor() {
    this.$trail = document.querySelector(".cursor-trail") as HTMLDivElement;
    this.outlineSize = this.$trail?.offsetWidth ?? 0;
    this.setupEventListeners();
    this.animateDotOutline();
  }

  setupEventListeners = () => {
    window.addEventListener("load", () => {
      // Anchor hovering
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => {
          this.toggleCursorSize(true);
        });
        el.addEventListener("mouseout", () => {
          this.toggleCursorSize(false);
        });
      });
    });

    // Click events
    document.addEventListener("mousedown", () => {
      this.toggleCursorSize(true);
    });
    document.addEventListener("mouseup", () => {
      this.toggleCursorSize(false);
    });

    document.addEventListener("mousemove", (e) => {
      // Show the cursor
      this.toggleCursorVisibility(true);

      // Position the dot
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", () => {
      this.toggleCursorVisibility(true);
    });

    document.addEventListener("mouseleave", () => {
      this.toggleCursorVisibility(false);
    });
  };

  animateDotOutline = () => {
    this.trail.x += Math.round(this.mouse.x - this.trail.x) * this.speed;
    this.trail.y += Math.round(this.mouse.y - this.trail.y) * this.speed;

    this.$trail.style.transform = `translate3d(${
      this.trail.x - this.outlineSize / 2
    }px, ${this.trail.y - this.outlineSize / 2}px, 0)`;

    requestAnimationFrame(this.animateDotOutline);
  };

  toggleCursorSize = (enlarge: boolean) => {
    if (enlarge) {
      this.$trail.style.transform = `translate3d(${
        this.trail.x - this.outlineSize / 2
      }px, ${this.trail.y - this.outlineSize / 2}px, 0) scale(1.7)`;
    } else {
      this.$trail.style.transform = `translate3d(${
        this.trail.x - this.outlineSize / 2
      }px, ${this.trail.y - this.outlineSize / 2}px, 0) scale(1)`;
    }
  };

  toggleCursorVisibility = (show: boolean) => {
    this.$trail.style.opacity = show ? "1" : "0";
    if (show) {
      this.debounce();
    }
  };

  debounce = () => {
    if (this.timeoutId) {
      // Cancel prev timeout
      window.clearTimeout(this.timeoutId);
    }

    const id = window.setTimeout(() => {
      this.$trail.style.opacity = "0";
    }, 2000);

    this.timeoutId = id;
  };
}

export default CursorTrail;
