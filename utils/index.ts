export const formatName = (name: string) => {
  return name.replace("_", " ");
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
