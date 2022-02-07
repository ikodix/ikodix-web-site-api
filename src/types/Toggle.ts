export type Toggle = {
    isToggleChecked: boolean;
    onToggleChanged: (checked: boolean) => void;
    toggleLabel: string;
};
