import { useState } from "react";
import {
  Paper,
  createStyles,
  TextInput,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import PasswordStrength from "./PasswordStrength";

type Props = {
  handleIsLogin: () => void;
};

const Register: React.FC<Props> = ({ handleIsLogin }) => {
  const [password, setPassword] = useState("");
  const { classes } = useStyles();

  return (
    <Paper className={classes.form} radius={0} p={30}>
      <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
        Welcome to Gali to Gali!
      </Title>

      <TextInput
        label="Email address"
        placeholder="hello@gmail.com"
        size="md"
        sx={() => ({
          marginBottom: "20px",
        })}
        required
      />
      {/* <PasswordInput label="Password" mt="md" size="md" required /> */}
      <PasswordStrength />

      <Button
        fullWidth
        mt="xl"
        size="md"
        variant="default"
        sx={() => ({
          border: "1px solid #3E7CD0",
          color: "#3E7CD0",
        })}
      >
        Sign up
      </Button>

      <Text align="center" mt="md">
        Have an account?{" "}
        <Anchor<"a"> href="#" weight={700} onClick={handleIsLogin}>
          Log in
        </Anchor>
      </Text>
    </Paper>
  );
};

const useStyles = createStyles((theme) => ({
  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default Register;
