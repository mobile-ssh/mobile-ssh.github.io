import type { LaptopsPost } from "./types";

// Simplified Chinese translation of /zh/blog/laptops-are-dead/.
// Mirrors en.ts key-for-key. Inline markup (<strong>, <em>, <code>, <a>,
// &nbsp;, curly quotes) is carried over verbatim; only the words change.

export const zh: LaptopsPost = {
  metaTitle: "笔记本电脑已死，但 SSH 和 TCP/IP 活了下来 | Mobile SSH",
  metaDescription:
    "一封写给笔记本电脑（1981–2026）的深情悼词。TCP/IP 设计于 1974 年，SSH 写成于 1995 年；两者都比硬件活得更久，一路走进了你手里的这台设备。这也是 Mobile SSH 的理由——一款面向 Android、iPhone 和 iPad 的 SSH、SFTP 与终端客户端。免费、原生、开源。",

  back: "博客",
  eyebrow: "观点",
  titleLead: "笔记本电脑已死。",
  titleSoft: "你的口袋万岁。",
  standfirst: `<b>但 SSH 和 TCP/IP 活了下来。</b>谨以此文悼念一位沉甸甸、暖烘烘的老朋友——
顺便说说那个悄悄搬进你手中设备的终端。`,
  author: "Mobile SSH 编辑部",
  date: "2026 年 7 月 27 日",
  readingTime: "阅读约 7 分钟",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "修复这个失败的测试"`,
      reading: "正在读取 src/api/auth.ts",
      patching: "正在修补 token 刷新逻辑 …",
      result: "3 个文件已改动，测试全绿",
      needsInput: "智能体需要输入",
      push: "git push origin main"
    },
    toast: {
      title: "智能体提醒",
      host: "prod-01",
      body: "Claude Code 正在等你确认"
    },
    caption:
      "证物 A：一次真实的 SSH 会话、一个编程智能体，还有一条智能体提醒——全部跑在你口袋里那台东西上，四下不见充电器。"
  },

  body: [
    {
      kind: "lead",
      html: `笔记本电脑——全世界开发者、写作者与旅人的挚爱伙伴——本周在一家咖啡馆里安详离世，享年四十五岁，
走时电量 6%，身边没有充电器。一如既往，它被那些它答应过要读的标签页围绕着。`
    },
    {
      kind: "p",
      html: `没有半点戏剧性。它只是暗了下去，从风扇里叹出最后一口气，然后——在最糟糕的时刻，最后一次——问你：
现在装个更新是不是正合适。`
    },
    {
      kind: "pull",
      html: `“每当你终于想到一个点子，它就要求重启固件。它一向如此。”`
    },
    { kind: "h2", html: `沉甸甸的一生，被人一路扛着` },
    {
      kind: "p",
      html: `它 1981 年生于 Osborne&nbsp;1 门下——十一公斤的「可搬运」野心，没有电池，一块五英寸的屏幕——此后
四十五年一直在变轻，却始终没真正轻起来。它离世时约莫一公斤半，这在它先辈看来纯属巫术。我们记得那副键盘。
记得温热的机身底部。记得每一次思考都由风扇轰鸣宣告。记得那个总是塞得太满一点的包，那块厚得像本小说的
充电器，以及那场永恒而满怀希望的寻找——窗边一个空着的插座。`
    },
    {
      kind: "p",
      html: `它对我们要求很多，我们还是一路扛着它，从书桌到登机口再到 24B 座位，因为在很长一段时间里，
只有它装得下一个真正的终端。这一点如今已经不成立了。`
    },
    { kind: "h2", html: `身后仍在的，是它的长辈` },
    {
      kind: "p",
      html: `笔记本电脑没有留下子嗣。当年许给它的那些接班人——平板、Chromebook、那种带可拆卸键盘的东西——都来了，
在后排坐下，最后发现不过是接口更少的笔记本电脑。真正活过它的，
是两位亲戚：它出生时它们就已经在干活，今天早上它们还在干活。`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> 是长辈。Vint Cerf、Bob Kahn 和一长串合作者在 1974 年 5 月发表了这套设计；
当年 12 月的 RFC&nbsp;675 把它写得明明白白，还顺手造出了「internet」这个词。ARPANET 从 1983 年 1 月 1 日
开始迁移过来，到那年 6 月完成——那时候，笔记本电脑还是个抱着软驱的学步儿童。`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> 是侄辈，三十一岁，是抬棺人里最年轻的一个。1995 年春天，Tatu
Ylönen 在 Helsinki University of Technology 写下了它——此前校园网上的一个嗅探器悄悄收走了成千上万个密码。
那年 7 月他发布了 <code>ssh-1.0.0</code>；端口 22 是他自己挑的：21 上的 FTP 与 23 上的 telnet 之间唯一空着的
号码，他的盘算是，坐在自己打算取代的这两个协议中间，「或许正是那种能带来些许可信光环的小事」。
他周一去问 IANA。他们周二点了头。他周三就发布了。`
    },
    { kind: "ledger" },
    { kind: "h2", html: `协议从来不曾假设的东西` },
    {
      kind: "p",
      html: `它们的长寿并不神秘。它们活得久，是因为它们几乎什么都不假设。TCP 假设有数据包，其中一些会丢失、
重复，或者顺序错乱地到达。SSH 假设有一条可靠的字节流和一对密钥。两份清单上都不存在的东西是：屏幕尺寸、
键盘布局、机身、转轴、墙上的插座，以及一家还没倒闭的厂商。`
    },
    {
      kind: "p",
      html: `SSH 甚至不假设你的终端有多大。它会问——而且允许你稍后给出不一样的答案。这份体贴当初是为那些
用鼠标拖拽桌面窗口边角的人发明的。它同时也是手机转个屏不会中断会话的原因。`
    },
    {
      kind: "pull",
      html: `“硬件是一具身体。协议是一种习惯。只有其中一样会被顺着楼梯间摔下去。”`
    },
    {
      kind: "p",
      html: `凡是绑在机身上的东西都先走一步，而它们没有一个死于工艺不佳。软驱、PC Card 插槽、扩展坞接口——
每一个都是为一组特定条件精心打造的，而要命的恰恰是那组条件。协议甚至连自己的主人都不绑定。当 Ylönen
后续版本的许可证收紧时，OpenBSD 项目退回到 <code>ssh 1.2.12</code>，那是最后一个自由到可以复用的版本，
并在 1999 年 12 月 1 日随 OpenBSD&nbsp;2.6 发布了 OpenSSH。协议照旧往前走。它从来就不属于任何人，
而这恰恰是它至今还在的原因。`
    },
    { kind: "h2", html: `唯一一处不得不打补丁的假设` },
    {
      kind: "p",
      html: `出于诚实，得更正一句。TCP 确实做过一个假设，而且它错了：它假设机器待在原地不动。一条连接由四个
数字命名——两个地址、两个端口——在 1981 年，这是给一样东西命名的绝佳办法，因为那样东西被螺栓固定在一间
架空地板的机房里。而当你拎着手机走出咖啡馆，这四个数字里就有一个悄悄变成了谎话。`
    },
    {
      kind: "p",
      html: `并没有第二场葬礼。协议留了下来，那个假设则被绕着打了补丁。活儿被挪到了远端，挪到一个正走出门去的
客户端够不着的地方：先是 <code>screen</code>，然后是 <code>tmux</code>，在终端来来去去的同时把 shell
一直开着。Eternal Terminal 更进一步，给会话本身命名，而不是给地址命名，于是地址在底下换来换去，
会话照样活着。`
    },
    {
      kind: "pull",
      html: `“你的服务器从来就不忠于那台笔记本电脑。它们忠于的是那个端口。”`
    },
    {
      kind: "p",
      html: `这些都不是为手机发明的，手机只是继承了它们。一个带着 Eternal Terminal 传输、tmux 管理器、
指数退避重连的保活机制，以及每台已保存服务器可配多个地址的客户端，可以在命令跑到一半时被人带出大楼，
然后在人行道上接着把话说完。远端知道的只有你客户端的版本字符串和终端尺寸。
从来没人告诉过它那里有没有一个转轴。`
    },
    { kind: "h2", html: `活儿悄悄搬进了口袋` },
    {
      kind: "p",
      html: `生命的最后几年，笔记本电脑开始为自己的存在感焦虑。它确实有理由焦虑。它曾经视为己有的那些活儿——
真正的终端、真正的文件传输、真正的密钥、真正的隧道——已经悄悄溜进了你手里的那台设备。`
    },
    {
      kind: "p",
      html: `那台设备上跑着 <strong>Mobile SSH</strong>：一款面向 Android、iPhone 和 iPad 的原生 SSH、SFTP
与终端客户端。不是玩具 shell，也不是假装成终端的远程桌面，而是一个完整的
<span class="nowrap">xterm-256color</span> 终端——货真价实的那种——大小刚好塞进笔记本电脑充电器
原先占的位置。`
    },
    {
      kind: "pull",
      html: `“它曾经视为己有的活儿搬进了口袋——而且一次都没开口要过插座。”`
    },
    { kind: "h2", html: `身后仍在的：你的手机——与 Mobile SSH` },
    {
      kind: "p",
      html: `遗产清单如下。谨遵遗愿，恕辞花圈，家属只请你把下面这份悼词读完，并记住：其中每一行都是你今天
就能装上的真实软件。`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `“「笔记本电脑已死」是一篇悼词，不是一份验尸报告。守灵之夜，笔记本电脑照样欢迎。”`
    },
    {
      kind: "p",
      html: `我们说这话时是带着爱的。笔记本电脑服役光荣，守灵时它随时欢迎光临——支开摆在边桌上，风扇轻轻转着，
终于插上了电。但白天的活儿已经轻装打包，离开了这栋楼。它现在装得进一个口袋。第一声铃响就接。`
    },
    {
      kind: "p",
      html: `SSH 和 TCP/IP 没有送花。它们在干活。`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf、Kahn 及同事发表了后来成为 TCP/IP 的那套设计",
        status: "仍在运行",
        on: true
      },
      {
        year: "1978",
        event: "DEC 推出 VT100，它的第一台兼容 ANSI 的终端",
        status: "转义序列仍在使用",
        on: true
      },
      {
        year: "1981",
        event: "Osborne&nbsp;1 上市：11&nbsp;公斤，1,795 美元，只能接市电",
        status: "1983 年停产",
        on: false
      },
      {
        year: "1983",
        event: "ARPANET 完成从 NCP 到 TCP/IP 的迁移",
        status: "仍在运行",
        on: true
      },
      {
        year: "1995",
        event: "SSH 在赫尔辛基写成；IANA 于 7 月 11 日批下端口 22",
        status: "仍在运行",
        on: true
      },
      {
        year: "2026",
        event: "笔记本电脑，享年 45 岁，咖啡馆里，电量 6%，没有充电器",
        status: "由上述各位送行",
        on: false
      }
    ],
    caption: "追悼会上宣读的出场顺序。最年长的吊唁者五十二岁。"
  },

  estate: [
    {
      heading: "口袋里的真终端",
      body: "完整的 <code>xterm-256color</code> 模拟，最多八个并发会话排在可调节的网格里，内置 tmux 会话管理器，还有 Eternal Terminal，让连接挺过掉线、休眠和 IP 变化。"
    },
    {
      heading: "文件与隧道，内置即用",
      body: "双栏 SFTP 浏览器，在手机和服务器之间搬文件；本地端口转发和隧道就存在各自的主机旁边——一连上就自动建立。"
    },
    {
      heading: "密钥在设备上生成",
      body: "在设备上生成 SSH 密钥——Ed25519 与 ECDSA——支持密码或私钥认证。没有任何东西离开这台手机。"
    },
    {
      heading: "编程智能体，配智能体提醒",
      body: "在你<em>自己</em>的服务器上运行 Claude Code、Codex 和其他智能体，直接从手机操作。智能体一需要你输入，智能体提醒就推送通知——带声音和振动——于是你可以走开，又不会脱节。"
    },
    {
      heading: "为这个场合盛装出席",
      body: "字体与配色可配置，支持 Nerd Font 的 powerline 与图标字形，还有插件系统可以继续扩展——把终端调到它像是你自己的为止。"
    },
    {
      heading: "真的免费，说真的",
      body: "没有广告。没有 Pro 付费墙。不需要账号。你的数据留在设备上，整个项目按 Apache-2.0 许可证开源。"
    }
  ],

  cta: {
    ariaLabel: "获取 Mobile SSH",
    heading: "恕辞花圈，请关掉几个标签页。",
    body: "装上 Mobile SSH，让你的笔记本电脑好好歇一歇——这是它应得的——然后在口袋里揣一个真正的终端：免费、原生、开源。",
    tags: ["无广告", "无需账号", "数据留在设备上", "Apache-2.0"],
    playButton: "在 Google Play 上加入测试",
    iosButton: "加入 iOS 测试版",
    note: `Android 目前处于封闭测试：请用你打算用来测试的 Google 账号加入，并在手机浏览器里打开加入
链接——封闭测试在 Google Play 应用内可能看不到。已经加入了？直接前往
<a href="{playUrl}" rel="noopener">Play 商店页面</a>。`
  }
};
