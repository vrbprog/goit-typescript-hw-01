type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, keyof AllType>>(
  top: T,
  bottom: T
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}