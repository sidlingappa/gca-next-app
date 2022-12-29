import {RefLink} from "./RefLink";

export interface Role {
    id: bigint;
    name: string;
    status: string;
    account: RefLink;
    application: RefLink;
    permissions: [];
}

class Access {
    title: string;
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
}

// @ts-ignore
export function getAccess(role: Role, name: string, accessType: string): boolean {
    const userRole = JSON.parse(JSON.stringify(role));
    console.log("role" + userRole?.role?.permissions[0]?.title);
    const readAccess = userRole?.role?.permissions.find(p => p.title === name + '-read');
    if (accessType === 'read' && readAccess) {
        return true;
    }
    const createAccess = userRole?.role?.permissions.find(p => p.title === name + '-create');
    if (accessType === 'create' && readAccess && createAccess) {
        return true;
    }
    const updateAccess = userRole?.role?.permissions.find(p => p.title === name + '-update');
    if (accessType === 'update' && readAccess && createAccess && updateAccess) {
        return true;
    }
    const deleteAccess = userRole?.role?.permissions.find(p => p.title === name + '-delete');
    if (accessType === 'delete' && readAccess && createAccess && deleteAccess) {
        return true;
    }
    return false;
}