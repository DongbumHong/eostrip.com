// utils 
import { saveItem, getItem } from '@_utils/indexed-db';
// data/type 
import VARIABLES from "@_data/variables.json";
import ROUTER_LIST from "@_data/router.json";
import { UserInfo } from "@_types/user-info";
import { LoginInfo } from "@_types/login-info";

const DBInfo = VARIABLES.IN_DB;
const UserRouterList = ROUTER_LIST.USER;
const AdminRouterList = ROUTER_LIST.ADMIN;

// 一般ユーザーログイン情報(JWT・ステータス)をLocal DBに保存
export async function saveUserLoginInfo(status: boolean, token: string): Promise<boolean> {
  return saveItem(DBInfo.LOGIN_STORE_NAME, { id: "user", status, token: token }).then(() => {
    // console.info("saveUserLoginInfo Success Set Status: ", status, token )
    return true;

  }).catch(err => { 
    console.error("*** Error LoginUtil saveUserLoginInfo ***", err);
    return false; 

  });
}

// 管理者ログイン情報(JWT・ステータス)をLocal DBに保存
export async function saveAdminLoginInfo(status: boolean, token: string): Promise<boolean> {
  return saveItem(DBInfo.LOGIN_STORE_NAME, { id: "admin", status, token: token }).then(() => {
    // console.info("saveAdminLoginInfo Success Set Status: ", status, token )
    return true;

  }).catch(err => { 
    console.error("*** Error LoginUtil saveAdminLoginInfo ***", err);
    return false; 

  });
}

// 一般ユーザーログイン情報(JWT・ステータス)をLocalDBから取得
export async function getUserLoginInfo(): Promise<LoginInfo> { 
  return getItem(DBInfo.LOGIN_STORE_NAME, "user").then((item) => { 
    const loginInfo: LoginInfo = item 
    // console.info("*** LoginUtil getUserLoginInfo *** ", item);

    return loginInfo; 
    
  }).catch(err => { 
    console.error("*** Error LoginUtil getUserLoginInfo ***", err);
    return {} as LoginInfo; 

  });
}

// 管理者ログイン情報(JWT・ステータス)をLocalDBから取得
export async function getAdminLoginInfo(): Promise<LoginInfo> { 
  return getItem(DBInfo.LOGIN_STORE_NAME, "admin").then((item) => { 
    const loginInfo: LoginInfo = item 
    // console.info("*** LoginUtil getAdminLoginInfo *** ", item);

    return loginInfo; 
    
  }).catch(err => { 
    console.error("*** Error LoginUtil getAdminLoginInfo ***", err);
    return {} as LoginInfo; 

  });
}

// 取得トークンから一般ユーザー情報を取得
export async function getUserInfo(): Promise<UserInfo> { 
  return await getUserLoginInfo().then((item) => {
    let userInfo: UserInfo;
    // console.info("*** LoginUtil getUserInfo *** ", item);

    if(item === undefined) return {} as UserInfo; 

    // TODO: トークンからユーザー情報取得処理
    // const userToken = item.token;
    userInfo = {
      userId: "yg-mart1",
      userName: "YG-Mart1",
      email: "yg-mart1@",
      authority: "admin1"
    };

    return userInfo;

  }).catch(err => { 
    console.error("*** Error LoginUtil getUserInfo ***", err);
    return {} as UserInfo; 

  });
}

// 取得トークンから管理者情報を取得
export async function getAdminInfo(): Promise<UserInfo> { 
  return await getAdminLoginInfo().then((item) => {
    let userInfo: UserInfo;
    // console.info("*** LoginUtil getAdminInfo *** ", item);

    if(item === undefined) return {} as UserInfo; 

    // TODO: トークンからユーザー情報取得処理
    // const userToken = item.token;
    userInfo = {
      userId: "yg-mart2",
      userName: "YG-Mart2",
      email: "yg-mart2@",
      authority: "admin2"
    };

    return userInfo;

  }).catch(err => { 
    console.error("*** Error LoginUtil getAdminInfo ***", err);
    return {} as UserInfo; 

  });
}

// ログイン情報から初画面のパスを設定
// 一般ユーザーログイン情報から初画面のパスを設定
export async function getUserTopPath(): Promise<string> { 
  return await getUserLoginInfo().then((item) => {
    // console.info("*** LoginUtil getUserTopPath *** ", item);

    let path = UserRouterList.LOGIN;
    if(item === undefined) return path;

    // TODO: トークン・ログリンの状態確認・初画面の設定
    const loginStatus = item.status;
    let tokenStatus = false;    
    if (item.token === VARIABLES.TEST.JWT_TOKEN) tokenStatus = true;

    if (loginStatus && tokenStatus) path = UserRouterList.TOP;
    else if(loginStatus && !tokenStatus) path = UserRouterList.SELECT;

    return path;

  }).catch(err => { 
    console.error("*** Error LoginUtil getUserTopPath ***", err);
      return UserRouterList.LOGIN;

  });
}

// 管理者ログイン情報から初画面のパスを設定
export async function getAdminTopPath(): Promise<string> { 
  return await getAdminLoginInfo().then((item) => {
    // console.info("*** LoginUtil getAdminTopPath *** ", item);

    let path = AdminRouterList.LOGIN;
    if(item === undefined) return path;

    // TODO: トークン・ログリンの状態確認・初画面の設定
    if (item.token === VARIABLES.TEST.JWT_TOKEN) path = AdminRouterList.TOP;

    return path;

  }).catch(err => { 
    console.error("*** Error LoginUtil getAdminTopPath ***", err);
      return AdminRouterList.LOGIN;

  });
}