/*
 * @method: POST
 * @header: {"Content-type": "application/x-www-form-urlencoded"}
 */

// let host = "http://192.168.2.148"
const host = 'http://218.77.105.152:2521/letter-api/',
	  imgHost = 'http://218.77.105.152:2521/images/'
export {host, imgHost}
/* 1. 个人主页部分 */
	/** 根据用户id获取用户信息
	 * @param {userId} = [230341]  
	 */
const getUserInfo = host + 'v1/user/getNewUserInfoDetail.shtml',
	/** 获取用户的认证和专业资格信息 
	 * @param {userInfoId} 用户id  
	 * @param {targetUserInfoId} 目标用户id  
	 */
	  getUserExtraInfo = host + 'v1/consultant/newBrowseUserInfoConsultantDetails.shtml'
export {
	getUserInfo,
	getUserExtraInfo,
}
/* 2. 信件操作部分 */
	/** 删除信件
	 * @param {userId} 用户id
	 * @param {envelopeId} 信件id
	 * @param {type} 删除类型：1-发信人删除 2-收信人删除
	 */
const deleteMail = host + 'v1/envelope/deleteEnvelope.shtml',
	/** 信件详情
	 * @param {envelopeId} 信件id
	 * @param {userId} 用户id
	 */
	  mailInfo = host + 'v1/envelope/envelopeDetails.shtml', 
	/** 收件箱
	 * @param {userId} 用户id  
	 * @param {pageNo} 页码  
	 * @param {pageSize} 每页显示  
	 */
	  receiveMails = host + 'v1/envelope/myReceiverEnvelopeList.shtml',
	/** 发件箱
	 * @param {userId} 用户id  
	 * @param {pageNo} 页码  
	 * @param {pageSize} 每页显示 
	 */
	  sendMails = host + 'v1/envelope/mySenderEnvelopeList.shtml', 
	/** 发送邮件
	 * @param {receiverId} 接收用户id  
	 * @param {senderId} 发送用户id
	 * @param {giftIds} 礼物id组
	 * @param {title} 信件标题
	 * @param {content} 信件内容
	 * @param {files} 图片文件列表 资源类型
	 */
	  sendMail = host + 'v1/envelope/sendEnvelope.shtml',
	/** 查询用户未读信封数量
	* @param {userId} 用户id  
	*/
	  searchNoReadMailCount = host + 'v1/envelope/selectUserUnreadCount.shtml',
	/** 回信
	* @param {receiverId} 接收用户id
	* @param {senderId} 发送用户id
	* @param {giftIds} 礼物id组
	* @param {title} 信件标题
	* @param {content} 信件内容
	* @param {files} 图片文件列表 资源类型
	*/
	  backMail = host + 'v1/envelope/sendBackEnvelope.shtml',
	 /** 阅读所有邮件
	  * @param {userId} 用户id  
	  */
	  readAllMail = host + 'v1/envelope/setRead.shtml'
export {
	deleteMail,
	mailInfo,
	receiveMails,
	sendMails,
	sendMail,
	searchNoReadMailCount,
	backMail,
	readAllMail,
}
/* 3. 用户关注问题 */
	  /** 修改关注状态
	  * @param {userId} 用户id  
	  * @param {friendUserId} 被关注好友id
	  */
const isFocused = host + 'v1/msg/selectUserConcerns.shtml',
	  /** 修改关注状态
	  * @param {userId} 用户id  
	  * @param {friendUserId} 被关注好友id
	  * @param {state} 关注状态 1 - 未关注  2 - 已关注
	  */
	  updateFocusState = host + 'v1/msg/insertUserConcerns.shtml'

export {
	isFocused,
	updateFocusState,
}

/* 4. 话题相关 */
	  /** 拉取话题展示列表
	  * @param {userId} 用户id 
	  * @param {pageNo} 页码
	  * @param {pageSize} 每页显示条数
	  */
const getUserTopicList = host + 'v1/topic/selectTopicListByUserId.shtml',
	  /** 获取话题详情
	  * @param {topicId} 话题id 
	  */
	  getTopicInfo = host + 'v1/topic/selectTopicContentById.shtml'
export {
	getUserTopicList,
	getTopicInfo,
}