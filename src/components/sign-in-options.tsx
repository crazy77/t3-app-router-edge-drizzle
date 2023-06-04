"use client";

import { type FC } from "react";
import { signIn } from "~/auth/client";
import { Button } from "./ui/button";

const SignInButtons: FC = () => {
  return (
    <div className="flex gap-2">
      <Button variant="outline" className="gap-2" onClick={() => void signIn("kakao")}>
        카카오 로그인
      </Button>
    </div>
  );
};

export default SignInButtons;
