export function setWidth(node: HTMLHeadingElement): void {
    const text: string = node.textContent || '';

    const countChar: number = text.length;

    const baseLength = 1.1;

    node.style.setProperty('--line-width', `${baseLength * countChar}rem`);
}