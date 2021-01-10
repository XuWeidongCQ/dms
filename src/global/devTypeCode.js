
export const typeInfo = {
  '麻醉机':{
    'devTypeCode':1,
    'include':['YI_AN_8700A','MAI_RUI_WATOEX65'],
    'url':'/dev-anesthesia'//前端路由地址
  },
  '呼吸机':{
    'devTypeCode':2,
    'include':[],
    'url':'/dev-respirator'
  },
  '无创血压监测仪(监护仪)':{
    'devTypeCode':3,
    'include':['BAO_LAI_TE_A8','MAI_RUI_T8','LI_BANG_ELITEV8'],
    'url':'/dev-noninvasive-blood-pressure'
  },
  '麻醉深度监测仪':{
    'devTypeCode':4,
    'include':['NUO_HE_NW9002S','PU_KE_YY106','MEI_DUN_LI_EEG_VISTA'],
    'url':'/dev-depth-of-anesthesia',
  },
  '无创血红蛋白监测仪':{
    'devTypeCode':5,
    'include':['NUO_HE_NW9002S','BAO_LAI_TE_A8','AI_QIN_EGOS600A','AI_QIN_EGOS600B','MEI_DUN_LI_5100C'],
    'url':'/dev-noninvasive-hemoglobin'
  },
  '无创脑氧饱和度监测仪':{
    'devTypeCode':6,
    'include':['AI_QIN_EGOS600A','AI_QIN_EGOS600B','AI_QIN_EGOS600C','MING_XI_MNIR_P100'],
    'url':'/dev-noninvasive-brain-oxygen'
  }
}

const devInfo = {
  'NUO_HE_NW9002S':{
    imgUrl:require('../assets/dev-image/NW9002S.jpg'),
    deviceCode:'30',
    devName:'诺和 NW9002S 麻醉深度/血红蛋白',
    devType:'NW9002S',
    devCompany:'合肥诺和电子科技有限公司'
  },
  'PU_KE_YY106':{
    imgUrl:require('../assets/dev-image/ConView YY-106.png'),
    deviceCode:'31',
    devName:'普可 YY-106 麻醉深度',
    devType:'YY-106',
    devCompany:'浙江普可医疗科技有限公司'
  },
  'BAO_LAI_TE_A8':{
    imgUrl:require('../assets/dev-image/BLTA8.jpg'),
    deviceCode:'32',
    devName:'宝莱特 A8 无创血压/血红蛋白',
    devType:'A8',
    devCompany:'广东宝莱特医用科技股份有限公司'
  },
  'YI_AN_8700A':{
    imgUrl:require('../assets/dev-image/Aeon8700A.jpg'),
    deviceCode:'33',
    devName:'宜安 8700A 麻醉机',
    devType:'8700A',
    devCompany:'北京谊安医疗系统股份有限公司'
  },
  'MAI_RUI_T8':{
    imgUrl:require('../assets/dev-image/beneview T8.jpg'),
    deviceCode:'42',
    devName:'迈瑞 T8 无创血压/监护仪',
    devType:'T8',
    devCompany:'深圳迈瑞生物医疗电子股份有限公司'
  },
  'MAI_RUI_WATOEX65':{
    imgUrl:require('../assets/dev-image/WATO EX55.jpg'),
    deviceCode:'43',
    devName:'迈瑞 WATOEX65/55Pro 麻醉机',
    devType:'WATOEX65',
    devCompany:'深圳迈瑞生物医疗电子股份有限公司'
  },
  'LI_BANG_ELITEV8':{
    imgUrl:'',
    deviceCode:'45',
    devName:'理邦 Elite-V8 无创血压/监护仪',
    devType:'Elite-V8',
    devCompany:'深圳市理邦精密仪器股份有限公司',
  },
  'AI_QIN_EGOS600A':{
    imgUrl:require('../assets/dev-image/EGOS600A.jpg'),
    deviceCode:'71',
    devName:'爱琴 EGOS-600A 血红蛋白/脑氧',
    devType:'EGOS-600A',
    devCompany:'苏州爱琴生物医疗电子有限公司',
  },
  'AI_QIN_EGOS600B':{
    imgUrl:'',
    deviceCode:'72',
    devName:'爱琴 EGOS-600A 血红蛋白/脑氧',
    devType:'EGOS-600A',
    devCompany:'苏州爱琴生物医疗电子有限公司',
  },
  'AI_QIN_EGOS600C':{
    imgUrl:'',
    deviceCode:'73',
    devName:'爱琴 EGOS-600A 脑氧',
    devType:'EGOS-600A',
    devCompany:'苏州爱琴生物医疗电子有限公司',
  },
  'MING_XI_MNIR_P100':{
    imgUrl:'',
    deviceCode:'74',
    devName:'名希 MNIR-P100 脑氧',
    devType:'MNIR-P100',
    devCompany:'重庆名希医疗器械有限公司',
  },
  'MEI_DUN_LI_EEG_VISTA':{
    imgUrl:'',
    deviceCode:'75',
    devName:'美敦力 186-1046 麻醉深度',
    devType:'EEG-VISTA(186-1046)',
    devCompany:'美国美敦力公司',
  },
  'MEI_DUN_LI_5100C':{
    imgUrl:'',
    deviceCode:'76',
    devName:'美敦力 5100C 血红蛋白',
    devType:'5100C',
    devCompany:'美国美敦力公司',
  }
}


//获取设备类型中的信息
//输入:'麻醉机','devTypeCode'
//返回: 1
export const getTypeInfo = function(devCategoryStr,field){
  return typeInfo[devCategoryStr][field]
}

// 获取仪器的代号
//输入:'MEI_DUN_LI_5100C',
//返回: '76'
export const getDevCode = function(devTypeStr){
  return devInfo[devTypeStr]['deviceCode']
}

//获取所有类型的代号
//返回 {'麻醉机':1,...}
export const getTypeCodes = function(){
  const ans = {}
  for(const key in typeInfo){
    ans[key] = getTypeInfo(key,'devTypeCode')
  }
  return ans
}

//获取某一类型中所有的仪器信息
//输入：'麻醉机'
/*返回 
  [
    {
      imgUrl:'',
      deviceCode:'76',
      devName:'美敦力 5100C 血红蛋白',
      devType:'5100C',
      devCompany:'美国美敦力公司',
    },
    ...
  ]
*/
export const getDevInfos = function(devCategoryStr){
  const ans = []
  const includeDevices = typeInfo[devCategoryStr]['include']
  for(const item of includeDevices){
    if(devInfo[item]['imgUrl'] !== ''){
      ans.push(devInfo[item])
    }
  }
  // console.log(ans)
  return ans
}





