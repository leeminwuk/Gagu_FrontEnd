import RNFS from 'react-native-fs';

export const downloadModel = async (url: string): Promise<string> => {
  const fileName = url.split('/').pop();
  const localPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
  const exists = await RNFS.exists(localPath);
  if (!exists) {
    await RNFS.downloadFile({ fromUrl: url, toFile: localPath }).promise;
  }
  return localPath;
};