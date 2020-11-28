import { avataaar } from './avataaar';

describe('foo', () => {
  it('should return an instance of avataaar without options', () => {
    expect(avataaar()).toBeTruthy();

    const url = new URL(avataaar().url());
    expect(url.toString()).toBe('https://avataaars.io/');
    expect(url.searchParams.get('avatarStyle')).toBeFalsy();
    expect(url.searchParams.get('topType')).toBeFalsy();
    expect(url.searchParams.get('accessoriesType')).toBeFalsy();
    expect(url.searchParams.get('facialHairType')).toBeFalsy();
    expect(url.searchParams.get('facialHairColor')).toBeFalsy();
    expect(url.searchParams.get('clotheType')).toBeFalsy();
    expect(url.searchParams.get('clotheColor')).toBeFalsy();
    expect(url.searchParams.get('graphicType')).toBeFalsy();
    expect(url.searchParams.get('eyeType')).toBeFalsy();
    expect(url.searchParams.get('eyebrowType')).toBeFalsy();
    expect(url.searchParams.get('mouthType')).toBeFalsy();
    expect(url.searchParams.get('skinColor')).toBeFalsy();
  });

  it('should return a circle avatar', () => {
    const url = new URL(avataaar().circle().url());
    expect(url.toString()).toBe('https://avataaars.io/?avatarStyle=Circle');
    expect(url.searchParams.get('avatarStyle')).toBe('Circle');
    expect(url.searchParams.get('topType')).toBeFalsy();
    expect(url.searchParams.get('accessoriesType')).toBeFalsy();
    expect(url.searchParams.get('facialHairType')).toBeFalsy();
    expect(url.searchParams.get('facialHairColor')).toBeFalsy();
    expect(url.searchParams.get('clotheType')).toBeFalsy();
    expect(url.searchParams.get('clotheColor')).toBeFalsy();
    expect(url.searchParams.get('graphicType')).toBeFalsy();
    expect(url.searchParams.get('eyeType')).toBeFalsy();
    expect(url.searchParams.get('eyebrowType')).toBeFalsy();
    expect(url.searchParams.get('mouthType')).toBeFalsy();
    expect(url.searchParams.get('skinColor')).toBeFalsy();
  });

  it('should return a transparent avatar', () => {
    const url = new URL(avataaar().transparent().url());
    expect(url.toString()).toBe('https://avataaars.io/?avatarStyle=Transparent');
    expect(url.searchParams.get('avatarStyle')).toBe('Transparent');
    expect(url.searchParams.get('topType')).toBeFalsy();
    expect(url.searchParams.get('accessoriesType')).toBeFalsy();
    expect(url.searchParams.get('facialHairType')).toBeFalsy();
    expect(url.searchParams.get('facialHairColor')).toBeFalsy();
    expect(url.searchParams.get('clotheType')).toBeFalsy();
    expect(url.searchParams.get('clotheColor')).toBeFalsy();
    expect(url.searchParams.get('graphicType')).toBeFalsy();
    expect(url.searchParams.get('eyeType')).toBeFalsy();
    expect(url.searchParams.get('eyebrowType')).toBeFalsy();
    expect(url.searchParams.get('mouthType')).toBeFalsy();
    expect(url.searchParams.get('skinColor')).toBeFalsy();
  });

  it('should return a random avatar', () => {
    const url = new URL(avataaar().random().url());

    expect(url.searchParams.get('avatarStyle')).toBeTruthy();
    expect(url.searchParams.get('topType')).toBeTruthy();
    expect(url.searchParams.get('accessoriesType')).toBeTruthy();
    expect(url.searchParams.get('facialHairType')).toBeTruthy();
    expect(url.searchParams.get('facialHairColor')).toBeTruthy();
    expect(url.searchParams.get('clotheType')).toBeTruthy();
    expect(url.searchParams.get('clotheColor')).toBeTruthy();
    expect(url.searchParams.get('graphicType')).toBeTruthy();
    expect(url.searchParams.get('eyeType')).toBeTruthy();
    expect(url.searchParams.get('eyebrowType')).toBeTruthy();
    expect(url.searchParams.get('mouthType')).toBeTruthy();
    expect(url.searchParams.get('skinColor')).toBeTruthy();
  });
});
