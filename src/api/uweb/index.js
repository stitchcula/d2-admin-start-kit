/* eslint-disable */
import axios from '@/plugin/axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *
 ==========================================================*/
/**
 *
 * request: CreateLink
 * url: CreateLinkURL
 * method: CreateLink_TYPE
 * raw_url: CreateLink_RAW_URL
 * @param body -
 */
export const CreateLink = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/mssh/links'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const CreateLink_RAW_URL = function() {
  return '/uweb/v1/mssh/links'
}
export const CreateLink_TYPE = function() {
  return 'post'
}
export const CreateLinkURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/mssh/links'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 树结构
 * request: GetLink
 * url: GetLinkURL
 * method: GetLink_TYPE
 * raw_url: GetLink_RAW_URL
 * @param guid -
 */
export const GetLink = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/mssh/links/{guid}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{guid}', `${parameters['guid']}`)
  if (parameters['guid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: guid'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const GetLink_RAW_URL = function() {
  return '/uweb/v1/mssh/links/{guid}'
}
export const GetLink_TYPE = function() {
  return 'get'
}
export const GetLinkURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/mssh/links/{guid}'
  path = path.replace('{guid}', `${parameters['guid']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 *
 * request: DeleteLink
 * url: DeleteLinkURL
 * method: DeleteLink_TYPE
 * raw_url: DeleteLink_RAW_URL
 * @param guid -
 */
export const DeleteLink = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/mssh/links/{guid}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{guid}', `${parameters['guid']}`)
  if (parameters['guid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: guid'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const DeleteLink_RAW_URL = function() {
  return '/uweb/v1/mssh/links/{guid}'
}
export const DeleteLink_TYPE = function() {
  return 'delete'
}
export const DeleteLinkURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/mssh/links/{guid}'
  path = path.replace('{guid}', `${parameters['guid']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 *
 * request: UpdateLink
 * url: UpdateLinkURL
 * method: UpdateLink_TYPE
 * raw_url: UpdateLink_RAW_URL
 * @param linkGuid -
 * @param body -
 */
export const UpdateLink = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/mssh/links/{link.guid}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{link.guid}', `${parameters['linkGuid']}`)
  if (parameters['linkGuid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: linkGuid'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('patch', domain + path, body, queryParameters, form, config)
}
export const UpdateLink_RAW_URL = function() {
  return '/uweb/v1/mssh/links/{link.guid}'
}
export const UpdateLink_TYPE = function() {
  return 'patch'
}
export const UpdateLinkURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/mssh/links/{link.guid}'
  path = path.replace('{link.guid}', `${parameters['linkGuid']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 平铺列表
 * request: ListLinks
 * url: ListLinksURL
 * method: ListLinks_TYPE
 * raw_url: ListLinks_RAW_URL
 */
export const ListLinks = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/mssh/links:list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ListLinks_RAW_URL = function() {
  return '/uweb/v1/mssh/links:list'
}
export const ListLinks_TYPE = function() {
  return 'get'
}
export const ListLinksURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/mssh/links:list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 树结构
 * request: GetNodes
 * url: GetNodesURL
 * method: GetNodes_TYPE
 * raw_url: GetNodes_RAW_URL
 */
export const GetNodes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/root/nodes'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const GetNodes_RAW_URL = function() {
  return '/uweb/v1/root/nodes'
}
export const GetNodes_TYPE = function() {
  return 'get'
}
export const GetNodesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/root/nodes'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 平铺列表
 * request: ListNodes
 * url: ListNodesURL
 * method: ListNodes_TYPE
 * raw_url: ListNodes_RAW_URL
 */
export const ListNodes = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/root/nodes:list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ListNodes_RAW_URL = function() {
  return '/uweb/v1/root/nodes:list'
}
export const ListNodes_TYPE = function() {
  return 'get'
}
export const ListNodesURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/root/nodes:list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 树结构
 * request: CreateTask
 * url: CreateTaskURL
 * method: CreateTask_TYPE
 * raw_url: CreateTask_RAW_URL
 * @param body -
 */
export const CreateTask = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/updater/tasks'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const CreateTask_RAW_URL = function() {
  return '/uweb/v1/updater/tasks'
}
export const CreateTask_TYPE = function() {
  return 'post'
}
export const CreateTaskURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/updater/tasks'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 平铺列表
 * request: GetTask
 * url: GetTaskURL
 * method: GetTask_TYPE
 * raw_url: GetTask_RAW_URL
 * @param id -
 */
export const GetTask = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/updater/tasks/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const GetTask_RAW_URL = function() {
  return '/uweb/v1/updater/tasks/{id}'
}
export const GetTask_TYPE = function() {
  return 'get'
}
export const GetTaskURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/updater/tasks/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 平铺列表
 * request: GetCaptcha
 * url: GetCaptchaURL
 * method: GetCaptcha_TYPE
 * raw_url: GetCaptcha_RAW_URL
 */
export const GetCaptcha = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/users:captcha'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const GetCaptcha_RAW_URL = function() {
  return '/uweb/v1/users:captcha'
}
export const GetCaptcha_TYPE = function() {
  return 'get'
}
export const GetCaptchaURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/users:captcha'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 树结构
 * request: Login
 * url: LoginURL
 * method: Login_TYPE
 * raw_url: Login_RAW_URL
 * @param body -
 */
export const Login = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/uweb/v1/users:login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const Login_RAW_URL = function() {
  return '/uweb/v1/users:login'
}
export const Login_TYPE = function() {
  return 'post'
}
export const LoginURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/uweb/v1/users:login'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
