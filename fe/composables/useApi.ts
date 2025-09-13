/**
 * Composable để gọi API
 * @returns API utilities
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  
  const apiUrl = config.public.apiUrl
  
  /**
   * Gọi API GET
   * @param endpoint - API endpoint
   * @param options - Fetch options
   * @returns Promise với response data
   */
  const get = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const response = await $fetch<T>(`${apiUrl}${endpoint}`, {
      method: 'GET',
      ...options
    })
    return response
  }
  
  /**
   * Gọi API POST
   * @param endpoint - API endpoint
   * @param data - Data to send
   * @param options - Fetch options
   * @returns Promise với response data
   */
  const post = async <T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> => {
    const response = await $fetch<T>(`${apiUrl}${endpoint}`, {
      method: 'POST',
      body: data,
      ...options
    })
    return response
  }
  
  /**
   * Gọi API PUT
   * @param endpoint - API endpoint
   * @param data - Data to send
   * @param options - Fetch options
   * @returns Promise với response data
   */
  const put = async <T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> => {
    const response = await $fetch<T>(`${apiUrl}${endpoint}`, {
      method: 'PUT',
      body: data,
      ...options
    })
    return response
  }
  
  /**
   * Gọi API DELETE
   * @param endpoint - API endpoint
   * @param options - Fetch options
   * @returns Promise với response data
   */
  const del = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const response = await $fetch<T>(`${apiUrl}${endpoint}`, {
      method: 'DELETE',
      ...options
    })
    return response
  }
  
  return {
    apiUrl,
    get,
    post,
    put,
    del
  }
}
