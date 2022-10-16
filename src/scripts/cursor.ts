if (typeof window !== "undefined") {
  const cursor = {
    delay: 4,
    _x: 0,
    _y: 0,
    dotSize: 0,
    outlineSize: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    timeout_id: null as number | null,
    $outline: document.querySelector(".cursor-dot-outline") as HTMLDivElement,

    init: function () {
      // Set up element sizes
      this.outlineSize = this.$outline?.offsetWidth ?? 0;
      this.timeout_id, this.setupEventListeners();
      this.animateDotOutline();
    },

    setupEventListeners: function () {
      var self = this;

      window.onload = function () {
        // Anchor hovering
        document.querySelectorAll("a").forEach(function (el) {
          el.addEventListener("mouseover", function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener("mouseout", function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });
      };

      // Click events
      document.addEventListener("mousedown", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      document.addEventListener("mouseup", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });

      document.addEventListener("mousemove", function (e) {
        // Show the cursor
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        // Position the dot
        // TODO: update to use transform
        self.endX = e.pageX;
        self.endY = e.pageY;
      });

      // Hide/show cursor
      document.addEventListener("mouseenter", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$outline.style.opacity = "1";
      });

      document.addEventListener("mouseleave", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$outline.style.opacity = "0";
      });
    },

    animateDotOutline: function () {
      var self = this;

      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + "px";
      self.$outline.style.left = self._x + "px";

      requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
      var self = this;

      if (self.cursorEnlarged) {
        self.$outline.style.transform = "translate(-50%, -50%) scale(1.7)";
      } else {
        self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
      }
    },

    toggleCursorVisibility: function () {
      var self = this;

      if (self.cursorVisible) {
        self.$outline.style.opacity = "1";

        this.debounce();
      } else {
        self.$outline.style.opacity = "0";
      }
    },

    debounce: function () {
      var self = this;

      if (this.timeout_id) {
        // Cancel prev timeout
        window.clearTimeout(this.timeout_id);
      }
      let id = window.setTimeout(() => {
        self.$outline.style.opacity = "0";
      }, 2000);

      this.timeout_id = id;
    },
  };

  cursor.init();
}
export {};
