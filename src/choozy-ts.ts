export default function (container: HTMLElement = document.body) {
  return (Array.from(container.querySelectorAll("*")) as HTMLElement[])
    .reduce(
      (entries, element) => [
        ...entries,
        ...Object.keys(element.dataset).map(
          (key) => [key, element] as [string, HTMLElement]
        ),
      ],
      [] as [string, HTMLElement][]
    )
    .reduce(
      (object, [key, element]) => ({
        ...object,
        [key]: object[key] ? [...object[key], element] : [element],
      }),
      {} as Record<string, HTMLElement[]>
    );
}
