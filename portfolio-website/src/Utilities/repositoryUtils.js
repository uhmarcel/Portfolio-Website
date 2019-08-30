export const repository = 'https://github.com/uhmarcel';

export const getTitle = (projectName) => {
    let result = projectName.replace(/-/g, ' ');
    return result;
} 

export const getImage = (projectName) => {
    const imagePostFix = '/raw/master/demo.png';
    const fullUrl = repository + '/' + projectName + imagePostFix;
    return fullUrl;
}

export const getProfilePicture = () => {
    const postFix = '.png';
    const fullUrl = repository + postFix;
    return fullUrl;
}