import _ from 'lodash';
import { getHtml } from '../components/Story/Body'; // aggiunto
import { extractImageTags } from './parser'; // aggiunto
import { categoryRegex } from './regexHelpers';
import { jsonParse } from './formatter';
import DMCA from '../../common/constants/dmca.json';
import whiteListedApps from './apps';

export const isPostDeleted = post => post.title === 'deleted' && post.body === 'deleted';

export const isPostTaggedNSFW = post => {
  if (post.parent_permlink === 'nsfw') return true;

  const postJSONMetaData = _.attempt(JSON.parse, post.json_metadata);

  if (_.isError(postJSONMetaData)) return false;

  return _.includes(postJSONMetaData.tags, 'nsfw');
};

export function dropCategory(url) {
  return url.replace(categoryRegex, '');
}

/**
 * Gets app data from a post.
 * Only Returns app info from apps whitelisted in apps.json
 * @param post
 * @returns An empty object if app is not valid otherwise an object with {appName: String, version: String}
 */
export function getAppData(post) {
  try {
    const jsonMetadata = jsonParse(post.json_metadata);
    const appDetails = _.get(jsonMetadata, 'app', '');
    const appData = _.split(appDetails, '/');
    const appKey = _.get(appData, 0, '');
    const version = _.get(appData, 1, '');

    if (whiteListedApps[appKey]) {
      return {
        appName: whiteListedApps[appKey],
        version,
      };
    }
    return {};
  } catch (error) {
    return {};
  }
}

export const isBannedPost = post => {
  const bannedAuthors = _.get(DMCA, 'authors', []);
  const bannedPosts = _.get(DMCA, 'posts', []);
  const postURL = `${post.author}/${post.permlink}`;

  return _.includes(bannedAuthors, post.author) || _.includes(bannedPosts, postURL);
};

export function getContentImages(content, parsed = false) {
  const parsedBody = parsed ? content : getHtml(content, {}, 'text');

  return extractImageTags(parsedBody).map(tag =>
    tag.src.replace('https://steemitimages.com/0x0/', '').replace('https://steemitimages.com/2x2/', '').replace('https://steemitimages.com/3x3/', ''),
  );
}

export default null;
