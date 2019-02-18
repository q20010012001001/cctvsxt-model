export const NAVDATA = "/api/json/navigation.do";

// 导航
export const nav = "/api/server?cmd=getnav&page=1&size=100&token=1&sign=1";

// 推荐内容
export const tuijian = "/api/server?cmd=gethomelist&size=15&token=1&sign=1";

// 不知道
// /api/server?cmd=getlivelist&page=1&size=15&token=G6HXZHQHNIZXCVXT&sign=cd76ef4cdd81ad3adc2073529fb83212&t=1549288063129
// /api/server?cmd=getservicelist&page=1&size=20&id=10103&token=G6HXZHQHNIZXCVXT&sign=5172970490ca9563b319629510d9482c&t=1549288845528

// 其他列表
export const qitaliebiao = "/api/server?cmd=getnewslist&size=15&token=1&sign=1";

// 点播列表
export const dianbo = "/api/server?cmd=getcate&size=20&token=1&sign=1";

// 视频详情
export const video = "/api/server?cmd=getvod&type=0&token=1&sign=1";
// 视频相关推荐
export const videoxiangguan =
  "/api/server?cmd=getnewslist&page=1&size=6&id=321009&token=1&sign=1";

// 详情页广告
export const ad = "/api/server?cmd=getadlink&page=1&size=10&token=1&sign=1";

// 看别人的用户信息
export const kanbiere = "/api/server?cmd=getotheruser&token=1&sign=1";
// 看别人的列表
export const kanbies = "/api/server?cmd=getdiarylist&size=10&token=1&sign=1";

// 图文详情
export const article = "/api/server?cmd=getdetail&type=1&token=1&sign=1";
// 图文相关推荐
export const arasdlxc =
  "/api/server?cmd=getnewslist&page=1&size=6&token=1&sign=1";

// 音乐列表
export const audiolist = "/api/server?cmd=getaudiolist&size=15&token=1&sign=1";
// 音乐详情
export const audioskdaskd =
  "/api/server?cmd=getaudio&id=4ec718be78df54cd&type=3&token=G6HXZHQHNIZXCVXT&sign=28a314bd2bdc3257bc2efc8ed393ae76&t=1549289939000";
export const audipcom =
  "/api/server?cmd=getnewslist&page=1&size=6&id=10134&token=1&sign=1";

// 图集详情
export const albumareasrs =
  "/api/server?cmd=getalbum&id=d3f587d268393359&type=2&token=G6HXZHQHNIZXCVXT&sign=87de74adc270481aa983f9010bbc03bf&t=1549289883959";
export const albumCom =
  "/api/server?cmd=getnewslist&page=1&size=6&id=10104&token=1&sign=1";

// 点赞
export const dianzai =
  "/api/user?cmd=postlove&id=4ec718be78df54cd&token=G6HXZHQHNIZXCVXT&sign=497597d811bca850adfc244fdf8a227c&t=1549290014815";

//   是否收藏了
export const ssoxak =
  "/api/user?cmd=checkcollection&sid=1007&id=4ec718be78df54cd&token=G6HXZHQHNIZXCVXT&sign=acceca4d04f89fe8da5f80e570585940&t=1549290110092";

//   是否关注了
export const ssoxakasd =
  "/api/user?cmd=checkattention&sid=1007&id=39&token=G6HXZHQHNIZXCVXT&sign=b2362ed59e99bcf235fcf57c54ebcb56&t=1549454063243";

// 登陆接口
export const denglus =
  "/api/user?cmd=checkcollection&sid=1007&id=4ec718be78df54cd&token=G6HXZHQHNIZXCVXT&sign=acceca4d04f89fe8da5f80e570585940&t=1549290110092";

// 关注
export const gaunzhu =
  "/api/user?cmd=addattention&sid=1007&id=39&token=G6HXZHQHNIZXCVXT&sign=356b7007ed47ea03dc9b52d5fe9b3dc3&t=1549290251186";
