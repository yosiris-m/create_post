declare module "*.png";
declare module "*.jpeg";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
