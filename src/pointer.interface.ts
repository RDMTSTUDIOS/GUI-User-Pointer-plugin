
export interface GUIPointer {

    display(): void,
    remove(): void,
    show(): void,
    hide(): void,

    appendViews(...views: HTMLElement[]): void,
    pointerClassList(): DOMTokenList,
    pointerStyleList(): CSSStyleDeclaration,
    
    onStateChange: (newState: string | null) => void,
    onStartRendering: () => Promise<void>,
    onStopRendering: () => Promise<void>,
};

export interface GUIPointersContructor {
    createGUIPointer: (pointer_marker: string, x_delta?: number, y_delta?: number) => GUIPointer,
};