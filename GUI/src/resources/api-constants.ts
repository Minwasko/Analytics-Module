const baseUrl = process.env.REACT_APP_API_URL
const chatsUrl = process.env.REACT_APP_BUEROKRATT_CHATBOT_URL

export const openSearchDashboard = process.env.REACT_APP_OPENSEARCH_DASHBOARD_URL

export const getLinkToChat = (chatId: string) => `${chatsUrl}/vestlus/ajalugu?chat=${chatId}`

export const getTesting = (): string => {
  return baseUrl + '/testing'
}

export const overviewMetricPreferences = (): string => {
  return baseUrl + '/overview/preferences'
}

export const overviewMetrics = (metric: string): string => {
  return baseUrl + `/overview/metrics?metric=${metric}`
}

export const getCsv = (): string => {
  return baseUrl + '/csv'
}


// Feedback

export const getChatsStatuses = (): string => {
  return baseUrl + '/chat/status'
}

export const getAverageFeedbackOnBuerokrattChats = (): string => {
  return baseUrl + '/feedback/avg-feedback-to-buerokratt-chats'
}

export const getNpsOnCSAChatsFeedback = (): string => {
  return baseUrl + '/feedback/csa-chats-feedback-nps'
}

export const getNpsOnSelectedCSAChatsFeedback = (): string => {
  return baseUrl + '/feedback/selected-csa-feedback-nps'
}

export const getNegativeFeedbackChats = (): string => {
  return baseUrl + '/feedback/chats-with-negative-feedback'
}

// Advisors

export const getChatForwards = (): string => {
  return baseUrl + '/csa/chat_forwards'
}

export const getAvgPickTime = (): string => {
  return baseUrl + '/csa/avg-time-picking-up-chat'
}

export const getAvgCsaPresent = (): string => {
  return baseUrl + '/csa/avg-present-number'
}

export const getCsaChatsTotal = (): string => {
  return baseUrl + '/csa/total-chats'
}

export const getCsaAvgChatTime = (): string => {
  return baseUrl + '/csa/avg-chat-time'
}

