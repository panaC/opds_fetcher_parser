import {dir} from 'console';
import {OpdsFetcher} from 'opds-fetcher-parser';
import {http, AuthenticationStorage} from 'opds-fetcher-parser';

const authenticationStorage = new AuthenticationStorage();
authenticationStorage.setAuthenticationToken({
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoxLCJpYXQiOjE2NDI0MzA0NDIsImV4cCI6MTY0MjQzMDUwMn0.cUI6cAZ_QETth2dojyog4j8wFMar8TXoi4RVQ2QuipU',
  authenticationUrl:
    'https://opds-auth-test-server-aplqpqv3wa-ey.a.run.app/implicit/login',
});
const _http = new http(undefined, authenticationStorage);

const opds = new OpdsFetcher(_http);

(async () => {
  const feed = await opds.feedRequest(
    'https://opds-auth-test-server-aplqpqv3wa-ey.a.run.app/implicit'
  );

  dir(feed);
})();
