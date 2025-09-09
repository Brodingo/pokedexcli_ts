export function cleanInput(input: string): string[] {
    // Split the input by spaces and filter out any empty strings
    return input.toLowerCase().split(' ').filter(arg => arg.trim() !== '');
}