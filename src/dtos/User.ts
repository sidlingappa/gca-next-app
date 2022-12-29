

export class User {
    id: bigint;
    username: string;
    roles:[];
    account:any;
    accountType:string;
    activationDate:Date;
    addresses:[];
    createdOn:Date;
    crmId:string;
    email:string;
    enabled:boolean;
    firstName:string;
    lastName:string;
    lastModifiedOn:Date;
    passwordUpdated:boolean;
    phoneNumbers:[];
    terminationDate:Date;
    timeZone:string;
    version:bigint;
}
export function getRoleId(user: User): bigint {
 const userInfo = JSON.parse(JSON.stringify(user));
 const role = userInfo?.roles[0];
 if(role === undefined){
    return 0;
 }else {
  let url = role?.href;
  console.log(url);
  return url?.substring(url?.lastIndexOf('/')+1);
 }

}

