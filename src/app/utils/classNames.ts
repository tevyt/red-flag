/**
 * @description Takes in a list of classes and returns a space separated string of classes
 */
export default function classNames(...classes: string[]) {
  return classes.join(" ");
}
