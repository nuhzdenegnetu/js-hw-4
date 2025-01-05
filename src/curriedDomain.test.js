import { curriedDomain } from './curriedDomain'

test('creates full domain https://example.com', () => {
  const protocolSetter = curriedDomain('https')
  const domainNameSetter = protocolSetter('example')
  expect(domainNameSetter('com')).toBe('https://example.com')
})

test('creates full domain http://mywebsite.org', () => {
  const protocolSetter = curriedDomain('http')
  const domainNameSetter = protocolSetter('mywebsite')
  expect(domainNameSetter('org')).toBe('http://mywebsite.org')
})
