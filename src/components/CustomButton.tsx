"use client";
import "@luzDeShiva/styles/components/CustomButton.css";
import { Raleway } from "next/font/google";
import { Button, ButtonProps } from "primereact/button";

const raleway = Raleway({ subsets: ["latin"] });

type CustomButtonProps = {
  title: string;
  handle?: () => void;
  addClass?: string;
  style?: object;
  loading?: boolean;
};

const CustomButton = (props: CustomButtonProps) => {
  const { title, handle, addClass = "", loading, ...rest } = props;

  return (
    <Button
      {...rest}
      label={title}
      className={`btn ${raleway.className} ${addClass}`}
      onClick={handle}
      type="submit"
      loading={loading}
      loadingIcon="pi pi-spin pi-sun"
      unstyled
    />
  );
};

export default CustomButton;
