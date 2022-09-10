import { createContext, useContext, useEffect, useState } from "react";

/**
 * Helper function to create a transition context
 * Transition context is used to manage and share transition state between components
 */

type TransitionContextValue = {
  values: {
    // Whether the transition has started
    isTransitioning: boolean;
    // Whether the transition has completed
    isTransitionComplete: boolean;
  };
  setters: {
    // Functions to set the transition state
    setIsTransitioning: (isTransitioning: boolean) => void;
    setIsTransitionComplete: (isTransitionComplete: boolean) => void;
  };
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function useTransitionContext() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionContextProvider"
    );
  }

  return context;
}

export function TransitionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);

  const value = {
    values: {
      isTransitioning,
      isTransitionComplete,
    },
    setters: {
      setIsTransitioning,
      setIsTransitionComplete,
    },
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}
