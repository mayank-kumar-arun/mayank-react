import {BASE_URL} from './public.api'


    export const getUserConfiguration = async(login?: string) =>{
    const response = await fetch(BASE_URL + '/AbpUserConfiguration/GetAll');
    const responseObj = await response.json();
    const result = responseObj.result;
    // console.log(result);
    const permissions = result.auth.grantedPermissions;
    // console.log(permissions);
    localStorage.setItem('storedPermissions', JSON.stringify(permissions));
    const localization = result.localization;
    const sources=result.localization.sources
    const language=result.localization.languages  
    //     if (login == 'login') {
    //       this.router.navigateByUrl('/pages/dashboard');
    //     }
    //     if (login == 'logout') {
    //       localStorage.removeItem('storedPermissions');
    //       this.router.navigateByUrl('/login');   
}
 

