import { useState } from "react";
import { TextInput, createStyles } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  invalid: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.red[8], 0.15)
        : theme.colors.red[0],
  },

  icon: {
    color: theme.colors.red[theme.colorScheme === "dark" ? 7 : 6],
  },
}));

const EmailValidation = () => {
  const [value, setValue] = useState("");
  const { classes } = useStyles();

  const validateEmail = (email: string): boolean => {
    const regularExpression =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") return true;
    return regularExpression.test(String(email).toLowerCase());
  };

  return validateEmail(value) ? (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      label="Email adress"
    />
  ) : (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      label="Email adress"
      error="Invalid email"
      defaultValue="hello@gmail.com"
      classNames={{ input: classes.invalid }}
      rightSection={
        <IconAlertTriangle stroke={1.5} size={16} className={classes.icon} />
      }
    />
  );
};

export default EmailValidation;
