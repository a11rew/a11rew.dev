import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

type Props = {
  [key: string]: string | undefined;
};

export default function useUpdateRootVariables(props: Props) {
  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;

    // Update the root variables
    for (const [key, value] of Object.entries(props)) {
      if (value) {
        root.style.setProperty(key, value);
      }
    }

    // Return a cleanup function
    return () => {
      for (const [key, value] of Object.entries(props)) {
        if (value) {
          root.style.removeProperty(key);
        }
      }
    };
  }, []);
}
