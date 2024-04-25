export const getIdFromUrl = (url: string): string => {
    const parts = url.split("/");
    const id = parts.pop();
    return id ? id : "";
};
