const questions = [
  {
    title: "暴雨倾盆的傍晚，没带伞的你站在屋檐下，你觉得雨水的味道是？",
    options: {
      A: "冰冷刺骨，带着城市钢铁的铁锈味。",
      B: "苦涩的，像某个人离开时空气里的潮湿。",
      C: "狂热的，带着泥土被砸碎的腥甜气息。",
      D: "沉闷的，像一本很久没翻开的旧书发霉的味道。"
    }
  },
  {
    title: "如果你的心脏有一道旧伤痕，你觉得它是怎么留下的？",
    options: {
      A: "因为看透了人性的理智，自己亲手割开的。",
      B: "因为一次次地拥抱带刺的人，被扎伤的。",
      C: "像飞蛾扑火般去爱，被烈焰灼烧的。",
      D: "岁月无声的侵蚀，风化出的一道裂缝。"
    }
  },
  {
    title: "听到一首很久以前经常听的老歌，你现在的感觉是？",
    options: {
      A: "只是客观地评价旋律，情绪不再起伏。",
      B: "瞬间红了眼眶，回忆像潮水一样淹没自己。",
      C: "想起那个听歌的年纪，有些冲动想去放纵一场。",
      D: "像喝了一口温热的旧茶，平静而感慨。"
    }
  },
  {
    title: "你认为“遗憾”的颜色是？",
    options: {
      A: "极地冰川的冷蓝色。",
      B: "晕开的墨水般的灰黑色。",
      C: "燃烧殆尽后的余烬暗红色。",
      D: "秋天落叶褪色后的枯黄色。"
    }
  },
  {
    title: "独自走在秋天的落叶上，听着碎裂的声音，你在想什么？",
    options: {
      A: "万物皆有尽头，凋零是必然的规律。",
      B: "它们在离开树的瞬间，会不会觉得疼。",
      C: "想把它们收集起来，点一把绚烂的火。",
      D: "每一片叶子，都记着一个夏天的故事。"
    }
  },
  {
    title: "当别人说“我懂你”时，你内心的真实潜台词是？",
    options: {
      A: "不可能，我自己都不完全懂我自己。",
      B: "真的吗？那你不要离开我好不好。",
      C: "懂我又怎样，你能陪我一起疯吗？",
      D: "谢谢你的善意，但我习惯了一个人承受。"
    }
  },
  {
    title: "看着逐渐暗下去的天色，你最想做的事情是？",
    options: {
      A: "拉上窗帘，打开台灯，沉浸在自己的世界里。",
      B: "看着窗外发呆，任由孤独感在房间里蔓延。",
      C: "换上衣服，走进夜色，寻找喧嚣与酒精。",
      D: "煮一杯热饮，翻开日记，记录下今天的感悟。"
    }
  },
  {
    title: "如果可以把一段记忆装进玻璃瓶，你会装入？",
    options: {
      A: "某次大彻大悟、看清真相的瞬间。",
      B: "那个未能兑现的诺言，和流下的眼泪。",
      C: "生命中最疯狂、最不计后果的那一天。",
      D: "一个平凡但充满安全感的午后。"
    }
  },
  {
    title: "你觉得眼泪流进嘴里，除了咸，还有什么味道？",
    options: {
      A: "像吞了一块冰，没有任何温度。",
      B: "像未熟的柠檬，涩得让人皱眉。",
      C: "像烈酒，烧灼着喉咙。",
      D: "像白开水，流多了也就麻木了。"
    }
  },
  {
    title: "清晨醒来，看着旁边空荡荡的枕头，你的第一反应是？",
    options: {
      A: "庆幸自己拥有完整的私人空间。",
      B: "感到一阵虚无，习惯性地想抱紧被子。",
      C: "觉得无聊，立刻拿起手机寻找新鲜刺激。",
      D: "轻轻拍了拍枕头，起身开始新的一天。"
    }
  },
  {
    title: "如果你的灵魂是一颗星，你觉得它位于哪个星区？",
    options: {
      A: "位于寒冷、遥远且独立的深空边缘。",
      B: "位于隐秘、多愁善感的暗物质星云中。",
      C: "是一颗正在爆发、光芒万丈的超新星。",
      D: "是一颗稳定发光、指引方向的恒星。"
    }
  },
  {
    title: "当你感到迷茫时，哪种自然元素最能给你力量？",
    options: {
      A: "高山之巅的冷风（风）。",
      B: "深夜寂静的海洋（水）。",
      C: "篝火中跳跃的烈焰（火）。",
      D: "森林深处厚实的土壤（土）。"
    }
  },
  {
    title: "偶尔强烈的“既视感”（Deja vu），你认为那是？",
    options: {
      A: "大脑神经元偶尔的短路和错误记忆。",
      B: "前世遗留下来的、未斩断的情缘纠葛。",
      C: "平行宇宙中的另一个自己正在做同样的事。",
      D: "命运齿轮咬合时，给予你的某种暗示。"
    }
  },
  {
    title: "在满月之夜，你通常会感到？",
    options: {
      A: "思维格外清晰，仿佛能看透一切伪装。",
      B: "情绪泛滥，容易因为小事陷入 emo。",
      C: "充满能量，有一种想要打破规则的冲动。",
      D: "感到平静，喜欢借着月光进行冥想。"
    }
  },
  {
    title: "你相信人与人之间的相遇是因为？",
    options: {
      A: "概率学上的随机碰撞。",
      B: "灵魂层面的互相吸引和前世宿命。",
      C: "能量场瞬间的共振与火花。",
      D: "缘分到了，水到渠成的自然规律。"
    }
  },
  {
    title: "如果要佩戴一种水晶来增强你的气场，你会选择？",
    options: {
      A: "晶莹剔透、净化一切的白水晶。",
      B: "温润柔和、治愈情感的粉晶或月光石。",
      C: "热情奔放、激发能量的红宝石或石榴石。",
      D: "深沉稳定、带来安全感的黑曜石。"
    }
  },
  {
    title: "你的直觉通常在什么时候最准确？",
    options: {
      A: "在完全冷静、摒除所有情感干扰时。",
      B: "在察觉到别人情绪微妙变化、捕捉谎言时。",
      C: "在面临突发危险、需要瞬间做出决定时。",
      D: "在评估一个人是否值得长久信任时。"
    }
  },
  {
    title: "梦境对于你来说，通常扮演什么角色？",
    options: {
      A: "潜意识对白天信息的无逻辑整理。",
      B: "压抑情感的宣泄口，经常梦见离别或寻找。",
      C: "奇幻的冒险乐园，梦境色彩浓烈且跳跃。",
      D: "现实的延伸，梦里的场景往往很日常。"
    }
  },
  {
    title: "如果塔罗牌中的一张代表你的现状，你会选？",
    options: {
      A: "【隐士】独自提灯，在黑暗中寻找真理。",
      B: "【月亮】不安、迷惘，在潜意识的海洋中沉浮。",
      C: "【高塔】打破旧有结构，渴望毁灭与重生。",
      D: "【世界】追求圆满、稳定与长久的和谐。"
    }
  },
  {
    title: "你觉得自己与宇宙的连接点在于？",
    options: {
      A: "绝对的理性和对真理的探求。",
      B: "强烈的共情能力和对万物的悲悯。",
      C: "燃烧的生命力和不屈服的意志。",
      D: "敬畏自然、顺应周期的平和心态。"
    }
  },
  {
    title: "当面对他人的强烈情绪爆发时，你的第一反应是？",
    options: {
      A: "物理和心理上后退，冷眼旁观，分析对方为何失控。",
      B: "感到焦虑和内疚，怀疑是不是自己做错了什么。",
      C: "情绪被点燃，以同样甚至更强烈的情绪回击。",
      D: "保持镇定，尝试安抚对方并寻找解决问题的方案。"
    }
  },
  {
    title: "在一段亲密关系中，你最害怕失去什么？",
    options: {
      A: "个人的独立空间和精神的自由。",
      B: "对方的关注、爱意和情感的连接。",
      C: "激情、新鲜感和共同冒险的乐趣。",
      D: "稳定、安全感和对未来的确定性。"
    }
  },
  {
    title: "当你感到被误解时，你的防御机制是？",
    options: {
      A: "隔离（Rationalization）：觉得对方认知层次不够，懒得解释。",
      B: "讨好（Placating）：委屈自己，试图解释并挽回关系。",
      C: "攻击（Projection）：愤怒地反驳，指出对方的错误。",
      D: "升华（Sublimation）：默默忍受，用工作或爱好转移注意力。"
    }
  },
  {
    title: "独处对你来说意味着什么？",
    options: {
      A: "必需的能量补充站，是我最舒服的状态。",
      B: "容易引发孤独感和胡思乱想的危险地带。",
      C: "为下一次狂欢做准备的短暂休息。",
      D: "自我反思、复盘生活和沉淀心灵的时刻。"
    }
  },
  {
    title: "如果你的内心是一个房间，你觉得它的布置是？",
    options: {
      A: "极简主义，冷色调，没有多余的杂物。",
      B: "光线昏暗，堆满了旧物和充满回忆的纪念品。",
      C: "色彩碰撞，充满艺术感，甚至是有些凌乱的。",
      D: "原木色调，温暖整洁，有一面巨大的书墙。"
    }
  },
  {
    title: "你在群体中最常扮演的角色是？",
    options: {
      A: "游离在边缘的观察者，很少发表意见。",
      B: "倾听者和心理咨询师，大家喜欢找你诉苦。",
      C: "气氛制造者，带领大家寻找乐子的核心人物。",
      D: "靠谱的执行者和调解员，维持团队的运转。"
    }
  },
  {
    title: "面对突如其来的变故，你的思维模式偏向于？",
    options: {
      A: "迅速计算损失，制定止损和脱身计划。",
      B: "陷入“为什么是我”的受害者心理，情绪崩溃。",
      C: "觉得刺激，立刻采取行动，不管后果如何。",
      D: "接受现实，按部就班地寻找解决办法。"
    }
  },
  {
    title: "你认为自己“讨好”他人的频率是？",
    options: {
      A: "极低，我不在乎别人的看法。",
      B: "很高，我很难拒绝别人，害怕被讨厌。",
      C: "看心情，只对让我觉得有趣或崇拜的人低头。",
      D: "适中，为了维持必要的社交和谐会做出妥协。"
    }
  },
  {
    title: "别人通常会用哪个词来形容初见你的印象？",
    options: {
      A: "高冷、距离感。",
      B: "温柔、好接近。",
      C: "张扬、有个性。",
      D: "踏实、让人安心。"
    }
  },
  {
    title: "你认为真正的“自我疗愈”是？",
    options: {
      A: "彻底看透一件事的本质，从而不再抱有期待。",
      B: "允许自己大哭一场，并在爱的人怀里得到安慰。",
      C: "投入一场新的、更强烈的热爱，覆盖过去的伤痛。",
      D: "与过去和解，带着伤疤继续平静地生活。"
    }
  }
];

const results = {
  A: {
    tag: "冷霜与木质香",
    title: "【凛冬松柏】",
    subtitle: "疏离、清醒、克制，却有极深的精神边界。",
    psychology: "疏离型依恋，极度理智，自我防御极高。",
    astro: "风象与土象的结合，带着天王星的疏离感。",
    literary: "站在悬崖边冷眼看雪的孤独者。",
    description: "你的气场是清冷的、克制的。初闻时带着冰霜的刺骨，拒人于千里之外；但若有人能越过你的防线，会闻到深沉的松柏木质香。那是你内心深处坚不可摧的独立与清醒。你对人性有着悲观的通透，不轻易交出真心，因为你深知没有期望就不会有失望。",
    advice: "偶尔脱下铠甲，感受微风的温度，并不会让你致命。"
  },
  B: {
    tag: "海洋与水生调",
    title: "【海盐苦泪】",
    subtitle: "柔软、敏感、共情力极强，也最容易背负别人的伤。",
    psychology: "焦虑型依恋，高敏感族群（HSP），共情能力溢出。",
    astro: "水象星座特质拉满，受月亮和海王星深刻影响。",
    literary: "永远在雨中等待、试图用体温捂热石头的痴情人。",
    description: "你的气场是潮湿的、柔软却带着隐痛的。你的信息素闻起来像微咸的海风，夹杂着一丝无法言说的苦涩。你太容易共情，太容易把别人的伤痛背在自己身上。你渴望被深层理解，也总在关系里付出更多，因此很容易吸引那些内心破碎、需要温度的灵魂。",
    advice: "你的善良需要长出锋利的牙齿。先学会爱自己，再去爱别人。"
  },
  C: {
    tag: "辛香与东方花香",
    title: "【焦糖野火】",
    subtitle: "热烈、危险、生命力汹涌，总想把平庸生活点燃。",
    psychology: "冲动型人格，渴望刺激，追求生命力的极致燃烧。",
    astro: "火象星座的具象化，火星能量爆棚。",
    literary: "带着毁灭美感的曼珠沙华，热烈而致命的爱人。",
    description: "你的气场是炙热的、具有侵略性的。你的信息素像燃烧的焦糖混合浓烈玫瑰，甜腻中带着一丝危险的焦苦味。你不甘平庸，讨厌一眼望到头的生活。你的爱与恨都像野火燎原，爱的时候倾其所有，不爱时也绝不拖泥带水。你总能轻易点燃周围人的情绪。",
    advice: "烟花绚烂但短暂，学会在燃烧与灰烬之间，找到生命的恒温。"
  },
  D: {
    tag: "大地与沉香调",
    title: "【旧书尘埃】",
    subtitle: "安稳、包容、念旧，像能让人靠岸的旧灯塔。",
    psychology: "安全型依恋为主，内核稳定，习惯怀旧与守护。",
    astro: "强大的土象能量，受土星的稳定与时间属性影响。",
    literary: "守着一座旧灯塔，把回忆熬成汤的守护者。",
    description: "你的气场是沉静的、包容的。你的信息素闻起来像阳光晒过的旧书页，夹杂着淡淡的尘埃与泥土厚重感。你是一个念旧的人，内心像有一座巨大的档案馆，珍藏着所有走过的人和事。你不一定擅长甜言蜜语，但你的存在本身，就是一种让人安心的稳定感。",
    advice: "不要被过去的灰尘掩盖了现在的光。偶尔翻开新的一页，生活会有新的惊喜。"
  },
  "A-B": {
    tag: "水生冷冽调",
    title: "【冰海暗涌】",
    subtitle: "你在亲密与退缩之间反复拉扯，冷与痛同时存在。",
    psychology: "恐惧型依恋（回避与焦虑并存）。你渴望亲密，却又极度害怕受伤。",
    astro: "风象的理智与水象的敏感疯狂拉扯。",
    literary: "撑着伞站在雨里，伞是干的，心却是湿的。",
    description: "你的气场是极其矛盾的。初闻是极地冰川的凛冽，带着生人勿近的冷漠；但如果再靠近一点，会闻到深海般咸涩而忧郁的底调。你是一个“高功能”的情绪患者，表面上比谁都清醒理智，深夜里却常常被无名的孤独感淹没。你习惯性地推开别人，其实是为了测试他们是否真的会留下来。",
    advice: "承认自己脆弱并不丢人，与其在冰冷的面具下窒息，不如试着开一扇小窗。"
  },
  "A-C": {
    tag: "金属与辛香花调",
    title: "【冷焰玫瑰】",
    subtitle: "冷静与失控共生，你总能有计划地靠近炽热。",
    psychology: "高智商的冲动派，带有目的性的浪漫主义，能在失控中保持一丝清醒。",
    astro: "天王星的特立独行撞上火星的爆发力。",
    literary: "拿着手术刀雕刻烟花的精密狂徒。",
    description: "你的气场具有强烈的反差魅惑感。前调是冰冷锋利的金属气息，中后调却猛然转为带有焦灼感的盛大玫瑰香。你兼具了极其冷静的头脑和极其疯狂的胆量，你会像个旁观者一样审视自己的欲望，然后再有计划地去“燃烧”。你吸引的是那些慕强、渴望被征服同时又带有受虐倾向的灵魂。",
    advice: "不要把人生当成一场精密的实验，有时候，允许一切自然发生，也是一种浪漫。"
  },
  "A-D": {
    tag: "极简木质调",
    title: "【雪覆沉香】",
    subtitle: "你像一座沉静的塔，稳固、抽离，也很难被真正靠近。",
    psychology: "极度独立，防御机制为“情感隔离”，是绝对的内核稳定者。",
    astro: "土星的克制与风象的抽离完美融合。",
    literary: "暴风雪中屹立不倒、却也空无一人的石塔。",
    description: "你散发着一种近乎于“无”却又极具存在感的气味。像是在大雪中埋藏了百年的沉香木，冷峻、深沉、不可撼动。你几乎不受外界情绪的干扰，有着老灵魂般的通透与疲惫。你非常靠谱，是所有人眼中的定海神针，但极少有人能真正走进你的内心世界。你吸引着寻求庇护的人，却很难对他们产生依赖。",
    advice: "坚不可摧是一件好事，但偶尔给生活留一点柔软的缝隙，阳光才能照进来。"
  },
  "B-C": {
    tag: "水生与浓烈东方调",
    title: "【雨夜烈酒】",
    subtitle: "你的情绪像海啸叠火焰，浓烈、成瘾、也极具破坏力。",
    psychology: "边缘型情绪特征，情感体验极度强烈，非黑即白，为爱生为爱死。",
    astro: "水与火的直接淬炼，常伴有冥王星的执念。",
    literary: "飞蛾不仅要扑火，还要和火焰一起把森林烧光。",
    description: "你的气场是极具破坏性和成瘾性的。闻起来就像一场暴雨浇在燃烧的烈酒上，水汽升腾中带着醉人的浓烈与绝望的凄美。你的情绪容量是常人的两倍，快乐时像在云端，悲伤时如同坠入地狱。你的爱充满了占有欲和献身精神。你极易吸引那些同样内心带有创伤、渴望在极端情感中寻找存在感的同类。",
    advice: "能够摧毁你的，从来不是别人，而是你那如海啸般的情绪。学会在爱中保留三分余地。"
  },
  "B-D": {
    tag: "泥土与绿叶水生调",
    title: "【潮湿苔藓】",
    subtitle: "你温柔、稳定、会照顾别人，却常把自己的委屈埋起来。",
    psychology: "牺牲型人格，极强的包容力与隐忍度，习惯将委屈内部消化。",
    astro: "巨蟹/双鱼的水象柔情，扎根在金牛/摩羯的土象大地上。",
    literary: "在废墟上默默生长的青苔，温柔地包裹着所有伤痕。",
    description: "你的气味极其温和、治愈，带着雨后森林底部的泥土腥气与青苔的湿润感。你是一个天生的“照顾者”，总是把别人的需求放在第一位，用自己稳定的情绪去托底那些敏感脆弱的人。然而，你吸收了太多的负能量，内心深处其实布满了未表达的暗伤。你总是吸引那些需要被疗愈、被像孩子一样宠爱的灵魂。",
    advice: "你的善良很贵，不要逢人就给。你要明白，你也是需要被撑伞的小孩。"
  },
  "C-D": {
    tag: "暖辛木质调",
    title: "【琥珀篝火】",
    subtitle: "热情不是三分钟热度，稳定也不是一潭死水。",
    psychology: "坚定且充满力量，将冲动转化为持久的动力，是世俗意义上的“大写的人”。",
    astro: "太阳或木星的光芒，被厚重的土象星座稳稳承接。",
    literary: "寒冬小木屋里，壁炉中劈啪作响、永不熄灭的柴火。",
    description: "你散发着一种极其温暖、可靠且充满生命力的香气。如同凝固了千万年的琥珀，在火焰的烘烤下散发出醇厚甘甜的树脂香。你的热情不是三分钟热度，而是源源不断的输出；你的稳定不是死水一潭，而是为了守护所爱之人的坚若磐石。你是天生的领导者或守护者，吸引着那些渴望在寒冷世界中寻找长久温暖的人。",
    advice: "燃烧自己照亮别人虽然伟大，但请记得定时为自己的灵魂添柴加火，别让自己枯竭。"
  }
};

const storageKey = "soul-pheromone-quiz-answers";
const answers = new Map();

const questionSections = document.querySelector("#questionSections");
const resultSection = document.querySelector("#resultSection");
const answeredCount = document.querySelector("#answeredCount");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const topProgressFill = document.querySelector("#topProgressFill");
const submitBtn = document.querySelector("#submitBtn");
const resetBtn = document.querySelector("#resetBtn");
const copyResultBtn = document.querySelector("#copyResultBtn");
const shareFeedback = document.querySelector("#shareFeedback");

let lastProfileKey = "";

function renderQuestions() {
  questions.forEach((question, index) => {
    const questionIndex = index + 1;
    const card = document.createElement("article");
    card.className = "question-card";
    card.dataset.questionIndex = String(questionIndex);

    const heading = document.createElement("h3");
    heading.className = "question-card__title";
    heading.textContent = `${questionIndex}. ${question.title}`;
    card.appendChild(heading);

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "options";

    Object.entries(question.options).forEach(([letter, text]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.question = String(questionIndex);
      button.dataset.letter = letter;
      button.innerHTML = `
        <span class="option__letter">${letter}</span>
        <span class="option__text">${text}</span>
      `;

      button.addEventListener("click", () => {
        answers.set(questionIndex, letter);
        syncSelectedState(questionIndex, letter);
        updateProgress();
      });

      optionsWrap.appendChild(button);
    });

    card.appendChild(optionsWrap);
    questionSections.appendChild(card);
  });
}

function syncSelectedState(questionIndex, selectedLetter) {
  const options = document.querySelectorAll(`[data-question="${questionIndex}"]`);
  options.forEach((option) => {
    option.classList.toggle("is-selected", option.dataset.letter === selectedLetter);
  });
}

function getCounts() {
  return ["A", "B", "C", "D"].reduce((counts, letter) => {
    counts[letter] = 0;
    return counts;
  }, {});
}

function updateProgress() {
  const answered = answers.size;
  const progress = (answered / questions.length) * 100;
  answeredCount.textContent = String(answered);
  progressFill.style.width = `${progress}%`;
  topProgressFill.style.width = `${progress}%`;

  if (answered === 0) {
    progressText.textContent = "先从第一直觉开始，别想太久。";
  } else if (answered < questions.length) {
    progressText.textContent = `还差 ${questions.length - answered} 题，继续往下走。`;
  } else {
    progressText.textContent = "已经全部答完，可以揭晓你的灵魂气味了。";
  }

  saveAnswers();
}

function getTopLetters(counts) {
  const maxScore = Math.max(...Object.values(counts));
  return Object.entries(counts)
    .filter(([, score]) => score === maxScore)
    .map(([letter]) => letter);
}

function getProfileKey(counts) {
  const topLetters = getTopLetters(counts);

  if (topLetters.length === 2) {
    return topLetters.sort().join("-");
  }

  return topLetters[0];
}

function getResultText(profile) {
  return [
    `${profile.title}｜${profile.tag}`,
    profile.subtitle,
    "",
    `心理侧写：${profile.psychology}`,
    `星象投射：${profile.astro}`,
    `文学意象：${profile.literary}`,
    "",
    `你的信息素：${profile.description}`,
    `给你的忠告：${profile.advice}`
  ].join("\n");
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    shareFeedback.textContent = successMessage;
  } catch (error) {
    shareFeedback.textContent = "复制失败了，可能是浏览器限制了剪贴板权限。";
  }
}

function displayResult() {
  if (answers.size < questions.length) {
    const firstMissingIndex = questions.findIndex((_, index) => !answers.has(index + 1));
    if (firstMissingIndex !== -1) {
      const target = document.querySelector(`[data-question-index="${firstMissingIndex + 1}"]`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    window.alert("还有题目没完成，先把 30 道题都选完吧。");
    return;
  }

  const counts = getCounts();
  answers.forEach((letter) => {
    counts[letter] += 1;
  });

  const profileKey = getProfileKey(counts);
  const profile = results[profileKey];
  lastProfileKey = profileKey;

  document.querySelector("#resultTag").textContent = profile.tag;
  document.querySelector("#resultTitle").textContent = profile.title;
  document.querySelector("#resultSubtitle").textContent = profile.subtitle;
  document.querySelector("#resultPsychology").textContent = profile.psychology;
  document.querySelector("#resultAstro").textContent = profile.astro;
  document.querySelector("#resultLiterary").textContent = profile.literary;
  document.querySelector("#resultDescription").textContent = profile.description;
  document.querySelector("#resultAdvice").textContent = profile.advice;

  shareFeedback.textContent = "";
  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  answers.clear();
  lastProfileKey = "";
  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("is-selected");
  });
  resultSection.classList.add("hidden");
  shareFeedback.textContent = "";
  localStorage.removeItem(storageKey);
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveAnswers() {
  const payload = Object.fromEntries(answers.entries());
  localStorage.setItem(storageKey, JSON.stringify(payload));
}

function restoreAnswers() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    Object.entries(parsed).forEach(([questionIndex, letter]) => {
      answers.set(Number(questionIndex), letter);
      syncSelectedState(Number(questionIndex), letter);
    });
  } catch (error) {
    localStorage.removeItem(storageKey);
  }
}

renderQuestions();
restoreAnswers();
updateProgress();

submitBtn.addEventListener("click", displayResult);
resetBtn.addEventListener("click", resetQuiz);
copyResultBtn.addEventListener("click", () => {
  if (!lastProfileKey) {
    shareFeedback.textContent = "先完成测评并生成结果，再复制结果文案。";
    return;
  }

  copyText(getResultText(results[lastProfileKey]), "结果文案已复制，可以发给朋友或粘贴到社交平台。");
});
