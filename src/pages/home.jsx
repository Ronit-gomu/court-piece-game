import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Text from "../components/Text";

const Home = () => {
  return (
    <>
      <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6">
        <div class="text-center">
          <Title title="Court Piece Game" />
          
          <Text text="A classic multiplayer trick-taking card game. Invite friends and play in real time!" />

          <div class="mb-6">
            <InputField placeHolder="Enter your name"></InputField>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" text="Create Game" />
            <Button variant="success" text="Join Game" />
          </div>
        </div>

        <footer class="mt-12 text-sm text-gray-500">
          Made with ♥ by Aarif
        </footer>
      </div>
    </>
  );
};

export default Home;
