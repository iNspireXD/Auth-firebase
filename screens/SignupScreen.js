import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authenticatio Failed",
        "Please check you inputs and try again"
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User...." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
