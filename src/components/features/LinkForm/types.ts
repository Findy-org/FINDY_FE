export type LinkFormProps = {
  /**
   * Function to be called when moving to the next step.
   */
  onNext: () => void;
  /**
   * Function to be called when moving to the previous step.
   */
  onPrev?: () => void;
  /**
   * Function to be called when clicking the home button.
   */
  onHomeClick: () => void;
};
