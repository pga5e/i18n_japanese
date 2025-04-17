// src/App.jsx
import { Box, Button, Select, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <Box m={20} p={20}>
      <Text>{t("hello")}</Text>
      <hr />
      <Text>{t("welcome")}</Text>
      <Button>{t("button")}</Button>
      <hr />
      <Select placeholder={t("select")}>
        <option value="option1">{t("option1")}</option>
        <option value="option2">{t("option2")}</option>
        <option value="option3">{t("option3")}</option>
      </Select>
    </Box>
  );
};

export default App;
