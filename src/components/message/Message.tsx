import messages from "@_data/message.json";

interface Messages {
  ERR: { [key: string]: string };
  WARN: { [key: string]: string };
  INFO: { [key: string]: string };
}

const message: Messages = messages;

//第1引数     ：message.jsonのメッセージ番号（必須）
//第２引数以降：メッセージの引数（オプション）
//例(getWarnMessage("W007","売上","30"))

//エラーメッセージ
export const getErrorMessage = (
  key: string,
  ...args: string[]
): string | undefined => {
  const template = message.ERR[key];
  if (template) {
    return replaceParams(template, ...args);
  }
  return undefined;
};

//警告メッセージ
export const getWarnMessage = (
  key: string,
  ...args: string[]
): string | undefined => {
  const template = message.WARN[key];
  if (template) {
    return replaceParams(template, ...args);
  }
  return undefined;
};

//インフォメッセージ
export const getInfoMessage = (
  key: string,
  ...args: string[]
): string | undefined => {
  const template = message.INFO[key];
  if (template) {
    return replaceParams(template, ...args);
  }
  return undefined;
};

const replaceParams = (template: string, ...args: string[]): string => {
  return template.replace(
    /\{(\d+)\}/g,
    (_, index) => args[parseInt(index, 10)]
  );
};
