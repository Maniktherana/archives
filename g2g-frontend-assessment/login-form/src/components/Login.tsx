import {
  createStyles,
  Title,
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
} from "@mantine/core";
import EmailValidation from "./EmailValidation";
import { GoogleButton, FacebookButton } from "./SocialButtons";

type Props = {
  handleIsLogin: () => void;
};

const Login: React.FC<Props> = ({ handleIsLogin }) => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.form} radius={0} p={30}>
      <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
        Welcome back to Gali to Gali!
      </Title>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <FacebookButton radius="xl">Facebook</FacebookButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      {/* <TextInput
        label="Email address"
        placeholder="hello@gmail.com"
        size="md"
      /> */}
      <EmailValidation />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        size="md"
      />
      <Checkbox label="Keep me logged in" mt="xl" size="md" />
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
        Log in
      </Button>

      <Text align="center" mt="md">
        Don&apos;t have an account?{" "}
        <Anchor<"a"> href="#" weight={700} onClick={handleIsLogin}>
          Sign up
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

export default Login;
