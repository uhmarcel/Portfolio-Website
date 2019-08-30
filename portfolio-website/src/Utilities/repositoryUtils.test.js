import { getTitle, getImage } from './repositoryUtils';

it('test getTitle', () => {
    const result = getTitle('My-repo-name');
    expect(result).toBe('My repo name');
}); 

it('test getImage', () => {
    const result = getImage('My-repo-name');
    expect(result).toBe('https://github.com/uhmarcel/My-repo-name/raw/master/demo.png');
})