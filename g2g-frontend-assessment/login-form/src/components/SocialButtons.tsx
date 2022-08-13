import { Button, ButtonProps, Group } from "@mantine/core";
import { GithubIcon, DiscordIcon, TwitterIcon } from "@mantine/ds";
import { GoogleIcon } from "../assets/GoogleIcon";
import { FacebookIcon } from "../assets/FacebookIcon";

export function GoogleButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
}

export function FacebookButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<FacebookIcon />}
      variant="default"
      sx={() => ({
        // backgroundColor: "#4267B2",
        border: "1px solid #4267B2",
        color: "#4267B2",
        // "&:hover": {
        //   backgroundColor: theme.fn.darken("#4267B2", 0.1),
        // },
      })}
      {...props}
    />
  );
}
