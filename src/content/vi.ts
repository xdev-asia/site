import type { Content } from "./types";

const UPDATED = "Có hiệu lực từ 25/11/2026";

export const vi: Content = {
  meta: {
    home: { title: "Trần Đức Duy: Solution Architect làm ứng dụng", description: "Trần Đức Duy thiết kế nền tảng y tế và bảo hiểm, và qua xDev làm công cụ AI như Hungi, trợ lý học ngôn ngữ." },
    terms: { title: "Điều khoản sử dụng · xDev", description: "Điều khoản áp dụng cho mọi ứng dụng, trang web và dịch vụ của xDev." },
    privacy: { title: "Chính sách quyền riêng tư · xDev", description: "Mỗi ứng dụng, trang web và dịch vụ của xDev làm gì với dữ liệu của bạn." },
    support: { title: "Hỗ trợ · xDev", description: "Cách nhận trợ giúp cho ứng dụng của xDev." },
    "delete-account": { title: "Xoá tài khoản Hungi · xDev", description: "Cách xoá tài khoản Hungi và dữ liệu học tập, có hoặc không cần ứng dụng." },
    brand: { title: "Thương hiệu · xDev", description: "Logo xDev, logo của các hệ thống con, màu và quy tắc dùng, kèm file tải về." },
    notFound: { title: "Không tìm thấy trang · xDev", description: "Trang này không tồn tại." },
  },
  nav: {
    skip: "Tới nội dung",
    menu: "Menu",
    main: "Chính",
    apps: "Sản phẩm",
    work: "Nền tảng",
    personas: "Persona",
    writing: "Bài viết",
    brand: "Thương hiệu",
    terms: "Điều khoản",
    privacy: "Quyền riêng tư",
    support: "Hỗ trợ",
    deleteAccount: "Xoá tài khoản",
    legal: "Pháp lý",
    contents: "Trong trang này",
    otherLang: "English",
    email: "Email cho Duy",
    seeApps: "Xem sản phẩm",
  },
  home: {
    title: "Trần Đức Duy, Solution Architect làm ứng dụng",
    lead: "Hơn 10 năm làm sản phẩm phần mềm. Mình thiết kế các nền tảng y tế và bảo hiểm, và qua xDev mình làm công cụ AI, ứng dụng và dạy học.",
    proof: "Đang làm Hungi, trợ lý học ngôn ngữ cho iOS và Android.",
    artLabel: "Hungi trên điện thoại: chú cún Hungi nghe một câu bạn nói, chấm 92 điểm và tô màu từng chữ, kèm kết quả kiểm tra trình độ 455 trên 600, mức B2.",
    apps: {
      title: "Sản phẩm của xDev.",
      more: "Cho người học và cho lập trình viên.",
      items: {
        sayitok: {
          label: "Hungi",
          title: "Hungi dạy nghe, nói, đọc, viết",
          body: "Trợ lý học ngôn ngữ cho người Việt: chú cún Hungi nghe từng câu bạn nói và chấm ngay. Mỗi bài đi một vòng nói, nghe, đọc, viết. Tiếng Anh từ con số 0 tới C2, tiếng Nhật có các bài đầu. Trước đây tên là Say It OK. Chưa có trên kho ứng dụng.",
        },
        ui: {
          label: "xDev UI",
          title: "xDev UI làm nên giao diện xDev",
          body: "Design token và component React cho các ứng dụng xDev. Tài liệu ở [ui.xdev.asia](https://ui.xdev.asia), mã nguồn trên [GitHub](https://github.com/xdev-asia/xdev-ui).",
        },
        ml: {
          label: "ML nhìn là hiểu",
          title: "ML nhìn là hiểu dạy AI",
          body: "Học máy học qua các thuật toán viết tay bằng Python, không dùng thư viện. Mã nguồn trên [GitHub](https://github.com/tdduydev/ml-nhin-la-hieu).",
        },
      },
    },
    work: {
      title: "Nền tảng y tế và bảo hiểm",
      body: "Là Solution Architect, mình thiết kế các nền tảng này từ đầu tới cuối: kiến trúc, tích hợp giữa các hệ thống và hạ tầng mà chúng chạy trên đó.",
      link: { label: "Xem hồ sơ trên LinkedIn", href: "https://www.linkedin.com/in/duydev" },
      portraitAlt: "Trần Đức Duy mặc áo vest tối, khoanh tay, mỉm cười",
      figures: [
        { value: "10+", label: "năm làm sản phẩm phần mềm" },
        { value: "13", label: "thuật toán máy học viết tay bằng Python" },
        { value: "600", label: "điểm tối đa của bài kiểm tra Hungi, theo CEFR" },
      ],
    },
    personas: {
      title: "Bốn persona từ tranh của chính mình.",
      more: "Những vai mình đổi qua lại: dẫn dắt, kiến trúc, AI và thiết kế.",
      items: [
        { name: "Duy Tran", role: "Cyber CEO", alt: "Duy Tran trong vai Cyber CEO, đeo kính râm tròn, phía sau là thành phố neon" },
        { name: "Code Duy", role: "System Architect", alt: "Code Duy trong vai System Architect, mặc hoodie, phía sau là mã nguồn màu xanh" },
        { name: "Neo Tran", role: "AI Engineer", alt: "Neo Tran trong vai AI Engineer, đeo kính trong, phía sau là sơ đồ mạng" },
        { name: "Pixel Duy", role: "Cyber Designer", alt: "Pixel Duy trong vai Cyber Designer, đội mũ len, đeo tai nghe" },
      ],
    },
    writing: {
      title: "Bài viết về phần mềm và AI",
      body: "Bài viết của mình bằng tiếng Việt. Mình cũng dạy học với tên Học cùng Duy trên Facebook.",
      items: [
        { title: "Ai sẽ chịu trách nhiệm cho kết quả từ AI?", source: "chungta.vn", href: "https://chungta.vn/goc-nhin/ai-se-chiu-trach-nhiem-cho-ket-qua-tu-ai-1141602.html" },
        { title: "Học cùng Duy", source: "Facebook", href: "https://www.facebook.com/duydev/" },
      ],
      photoAlt: "Trần Đức Duy mặc áo hoodie tối, khoanh tay, mỉm cười",
    },
    close: {
      title: "Hợp tác, tư vấn kiến trúc và góp ý ứng dụng",
      line: "Viết bằng tiếng Việt hoặc tiếng Anh tới duy@xdev.asia.",
    },
  },

  terms: {
    title: "Điều khoản sử dụng",
    stamp: `Mọi ứng dụng, trang web và dịch vụ của xDev · ${UPDATED}`,
    summary:
      "Bạn được dùng các ứng dụng xDev cho công việc của mình, ở nhà hay ở công ty. Phần mã nguồn mở giữ giấy phép riêng của nó. Ứng dụng được cung cấp nguyên trạng, không kèm bảo hành. Hãy sao lưu trước khi để bất kỳ ứng dụng nào thay đổi hoặc xoá tệp.",
    sections: [
      {
        id: "scope",
        title: "Phạm vi của điều khoản",
        blocks: [
          "Điều khoản này là thoả thuận giữa bạn và xDev (\"chúng tôi\"). Nó áp dụng cho mọi ứng dụng, trang web và dịch vụ trực tuyến do chúng tôi phát hành và có dẫn tới trang này: tài khoản xDev, ứng dụng Hungi và trang web này. Dưới đây gọi chung là \"ứng dụng\".",
          "Khi cài đặt hoặc sử dụng ứng dụng, bạn chấp nhận điều khoản này. Nếu không chấp nhận, bạn đừng sử dụng ứng dụng.",
          "Một ứng dụng có thể có thêm điều khoản riêng, hiển thị trong ứng dụng hoặc trên trang cửa hàng của nó. Chỗ nào khác với trang này thì điều khoản riêng được áp dụng cho ứng dụng đó.",
        ],
      },
      {
        id: "licence",
        title: "Quyền sử dụng ứng dụng",
        blocks: [
          "Chúng tôi cấp cho bạn quyền cài đặt và sử dụng từng ứng dụng trên thiết bị bạn sở hữu hoặc quản lý, cho mục đích cá nhân hoặc công việc. Quyền này mang tính cá nhân, không độc quyền và không chuyển nhượng được.",
          "Bạn không được bán, cho thuê hay cấp phép lại ứng dụng, không được gỡ các thông báo bản quyền, và không được giới thiệu ứng dụng như sản phẩm của mình. Điều này không hạn chế những gì giấy phép mã nguồn mở cho phép (xem mục tiếp theo).",
        ],
      },
      {
        id: "open-source",
        title: "Phần mềm mã nguồn mở",
        blocks: [
          "Một phần của các ứng dụng là mã nguồn mở. Mã nguồn nằm tại [github.com/xdev-asia](https://github.com/xdev-asia), và mỗi kho ghi rõ giấy phép của nó (ví dụ Apache-2.0 cho xDev UI).",
          "Với phần mã nguồn đó, giấy phép mã nguồn mở được áp dụng và được ưu tiên hơn điều khoản này. Điều khoản này vẫn áp dụng cho bản ứng dụng đã đóng gói do chúng tôi phân phối và cho các dịch vụ trực tuyến của chúng tôi.",
        ],
      },
      {
        id: "accounts",
        title: "Tài khoản",
        blocks: [
          "Phần lớn ứng dụng chạy được mà không cần tài khoản. Một số dịch vụ cần tài khoản xDev, bạn tạo bằng cách đăng nhập với GitHub, Google hoặc đường dẫn gửi qua email.",
          "Hãy giữ an toàn thông tin đăng nhập và báo cho chúng tôi nếu bạn nghĩ có người khác đang dùng tài khoản của bạn. Bạn có thể xoá tài khoản bất cứ lúc nào trong ứng dụng hoặc bằng cách viết cho chúng tôi.",
        ],
      },
      {
        id: "paid",
        title: "Tính năng trả phí",
        blocks: [
          "Các ứng dụng liệt kê trên trang này miễn phí, trừ gói Hungi Plus mô tả ở mục dưới. Nếu chúng tôi có gói hoặc giao dịch trả phí khác, bạn sẽ thấy giá và nội dung trước khi thanh toán, và điều khoản hiển thị tại thời điểm đó áp dụng cho giao dịch.",
        ],
      },
      {
        id: "sayitok",
        title: "Hungi (trước đây là Say It OK)",
        blocks: [
          "Hungi là ứng dụng học ngôn ngữ của xDev, trước đây có tên Say It OK. Điều khoản này tiếp tục áp dụng cho tài khoản đã tạo dưới tên cũ. Ứng dụng hiện dạy tiếng Anh; tiếng Nhật mới có các bài đầu tiên.",
          "Toàn bộ khoá học, từ điển, ôn tập và bài kiểm tra đầu vào của Hungi là miễn phí. Bản miễn phí có quảng cáo (iPhone và Android) và giới hạn số lượt dùng gia sư AI, cố vấn AI và dịch qua máy chủ mỗi ngày.",
          "**Hungi Plus** là gói đăng ký tự động gia hạn: theo tháng, theo năm, hoặc gói Gia đình theo năm (chia sẻ qua Chia sẻ trong gia đình của Apple).",
          {
            list: [
              "Tiền được trừ vào tài khoản Apple ID khi bạn xác nhận mua. Gói tự gia hạn trừ khi bạn tắt tự động gia hạn ít nhất 24 giờ trước khi kỳ hiện tại kết thúc; tài khoản bị trừ tiền cho kỳ tiếp theo trong vòng 24 giờ trước khi kỳ hiện tại kết thúc.",
              "Gói năm có thể kèm 7 ngày dùng thử miễn phí cho lần đăng ký đầu tiên. Nếu không huỷ trước khi hết dùng thử, gói chuyển sang trả phí. Phần dùng thử còn lại mất khi bạn mua gói khác.",
              "Quản lý và huỷ gói trong Cài đặt iPhone → tên của bạn → Đăng ký, hoặc trong ứng dụng tại Tôi → Cài đặt → Gói học. Hoàn tiền do Apple xử lý theo chính sách của App Store.",
              "Điều khoản sử dụng chuẩn của Apple ([EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)) cũng áp dụng cho bản iPhone.",
            ],
          },
          "**Nội dung do AI tạo.** Một số nội dung trong Hungi được AI viết hoặc chấm: câu ví dụ, mục từ điển nằm ngoài danh sách từ của ứng dụng, câu trả lời của gia sư và cố vấn AI, và phần chấm điểm nói và viết của bạn. Nội dung này có thể sai hoặc chưa đầy đủ. Hungi là công cụ hỗ trợ luyện tập, không phải lời khuyên chuyên môn, và không thay thế giáo viên.",
          "**Kết quả trình độ là ước tính.** Trình độ CEFR từ bài kiểm tra đầu vào và điểm 0–600 của \"Kiểm tra trình độ\" là ước tính để định hướng việc luyện tập. Đây không phải chứng chỉ chính thức và không thay thế các kỳ thi như IELTS, TOEIC hay Cambridge.",
          {
            id: "sayitok-sources",
            text: "**Kiểm tra từ điển.** Mục từ điển do AI viết được kiểm tra tự động với các nguồn dữ liệu mở:",
          },
          {
            list: [
              "từ loại, đối chiếu với [Open English WordNet](https://github.com/globalwordnet/english-wordnet), giấy phép CC BY 4.0;",
              "phát âm kiểu Mỹ, đối chiếu với [CMU Pronouncing Dictionary](https://github.com/cmusphinx/cmudict), giấy phép kiểu BSD.",
            ],
          },
          "Mục từ không qua được bước kiểm tra vẫn có thể hiển thị và được đưa vào hàng chờ để người kiểm duyệt. Nghĩa tiếng Việt được người kiểm duyệt dần theo thời gian.",
          "**Đồng ý điều khoản.** Bạn đồng ý với các điều khoản này và [Chính sách quyền riêng tư](/vi/privacy/) khi đánh dấu vào ô đồng ý lúc tạo tài khoản trong ứng dụng. Nếu bạn tiếp tục dùng ứng dụng sau khi điều khoản thay đổi, bạn đồng ý với phiên bản mới kể từ ngày hiệu lực ghi ở đầu trang này.",
        ],
      },
      {
        id: "your-data",
        title: "Tệp và nội dung của bạn",
        blocks: [
          "Mã nguồn, tệp và nội dung khác của bạn vẫn là của bạn. Chúng tôi không đòi quyền gì đối với chúng.",
          "[Chính sách quyền riêng tư](/vi/privacy/) ghi rõ mỗi ứng dụng đọc, lưu hay gửi những gì.",
        ],
      },
      {
        id: "files",
        title: "Ứng dụng thay đổi hoặc xoá tệp",
        blocks: [
          "Một số ứng dụng có thể tác động lên tệp của bạn hoặc chạy lệnh thay bạn.",
          "Bạn là người quyết định ứng dụng làm gì: hãy xem kỹ những gì ứng dụng hiển thị trước khi xác nhận. Hãy sao lưu những thứ bạn không thể để mất. Chúng tôi không chịu trách nhiệm về dữ liệu bị mất do thao tác mà bạn đã xác nhận.",
        ],
      },
      {
        id: "acceptable-use",
        title: "Sử dụng hợp lệ",
        blocks: [
          {
            list: [
              "Không dùng ứng dụng để vi phạm pháp luật hoặc gây hại cho người khác.",
              "Không tìm cách phá hoại, làm quá tải hoặc truy cập trái phép các dịch vụ trực tuyến của chúng tôi.",
              "Không dùng dịch vụ của chúng tôi để gửi thư rác hoặc mã độc.",
            ],
          },
          "Chúng tôi có thể tạm khoá tài khoản vi phạm các điều trên.",
        ],
      },
      {
        id: "third-party",
        title: "Công cụ và dịch vụ của bên khác",
        blocks: [
          "Các ứng dụng có thể làm việc với công cụ và dịch vụ của công ty khác, như coding agent, GitHub hay Docker. Việc bạn dùng chúng tuân theo điều khoản của chính các bên đó, và chúng tôi không chịu trách nhiệm về chúng.",
        ],
      },
      {
        id: "warranty",
        title: "Không bảo hành",
        blocks: [
          "Ứng dụng được cung cấp \"nguyên trạng\" và \"theo khả năng sẵn có\", không kèm bất kỳ bảo hành nào, dù rõ ràng hay ngụ ý, kể cả bảo hành về tính phù hợp cho một mục đích cụ thể và về việc không vi phạm quyền của bên khác. Các bản xem trước có thể có lỗi và có thể thay đổi mà không báo trước.",
          "Một số luật không cho phép loại trừ như vậy. Khi đó, các loại trừ này chỉ áp dụng trong phạm vi luật cho phép.",
        ],
      },
      {
        id: "liability",
        title: "Giới hạn trách nhiệm",
        blocks: [
          "Trong phạm vi luật cho phép, xDev không chịu trách nhiệm về thiệt hại gián tiếp, ngẫu nhiên hay hệ quả, hoặc về mất dữ liệu, lợi nhuận hay cơ hội kinh doanh, phát sinh từ việc sử dụng hoặc không sử dụng được ứng dụng.",
          "Tổng trách nhiệm của chúng tôi cho mọi khiếu nại về một ứng dụng không vượt quá số tiền bạn đã trả cho chúng tôi cho ứng dụng đó trong 12 tháng trước khi khiếu nại.",
        ],
      },
      {
        id: "changes",
        title: "Thay đổi",
        blocks: [
          "Chúng tôi có thể thay đổi, bổ sung hoặc ngừng một ứng dụng hay tính năng. Chúng tôi cũng có thể thay đổi điều khoản này. Bản mới được đăng trên trang này kèm ngày hiệu lực mới. Nếu bạn tiếp tục dùng ứng dụng sau ngày đó, bạn chấp nhận điều khoản mới.",
        ],
      },
      {
        id: "ending",
        title: "Chấm dứt",
        blocks: [
          "Bạn có thể dừng bất cứ lúc nào bằng cách gỡ ứng dụng và xoá tài khoản. Quyền sử dụng của bạn chấm dứt nếu bạn vi phạm điều khoản này. Các mục về bảo hành và trách nhiệm vẫn có hiệu lực sau khi điều khoản chấm dứt.",
        ],
      },
      {
        id: "contact",
        title: "Liên hệ",
        blocks: [
          "Câu hỏi về điều khoản này: [duy@xdev.asia](mailto:duy@xdev.asia), hoặc mở issue tại [github.com/xdev-asia](https://github.com/xdev-asia).",
          "Điều khoản này có bản tiếng Anh và tiếng Việt. Nếu hai bản khác nhau, bản tiếng Anh được áp dụng.",
        ],
      },
    ],
  },

  privacy: {
    title: "Chính sách quyền riêng tư",
    stamp: `Mọi ứng dụng, trang web và dịch vụ của xDev · ${UPDATED}`,
    summary:
      "Chúng tôi không bán dữ liệu. Các công cụ cho lập trình viên chạy trên thiết bị của bạn, không quảng cáo, không analytics. Hungi (trước đây là Say It OK) lưu tài khoản và tiến độ học trên máy chủ của chúng tôi, có thống kê và báo lỗi Firebase (tắt được trong ứng dụng), và bản miễn phí có quảng cáo; mục Hungi bên dưới ghi rõ từng thứ.",
    sections: [
      {
        id: "scope",
        title: "Chúng tôi là ai và phạm vi áp dụng",
        blocks: [
          "Chính sách này là của xDev (\"chúng tôi\"). Nó áp dụng cho mọi ứng dụng, trang web và dịch vụ trực tuyến do chúng tôi phát hành và có dẫn tới trang này. Mỗi sản phẩm có một mục riêng bên dưới, vì mỗi sản phẩm xử lý dữ liệu khác nhau.",
          "Trước khi phát hành ứng dụng mới, chúng tôi bổ sung mục của nó vào đây.",
        ],
      },
      {
        id: "all-apps",
        title: "Điều đúng với mọi ứng dụng",
        blocks: [
          {
            list: [
              "Chúng tôi không bán hay cho thuê dữ liệu cá nhân.",
              "Không quảng cáo, không mã định danh quảng cáo và không analytics, trừ Hungi (xem mục Hungi).",
              "Tệp và mã nguồn của bạn được xử lý trên thiết bị của bạn. Chúng tôi không nhận được chúng.",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "Tài khoản xDev",
        blocks: [
          "Nếu bạn tạo tài khoản xDev, chúng tôi lưu:",
          {
            list: [
              "tên, địa chỉ email và URL ảnh đại diện của bạn;",
              "mã tài khoản của bạn tại GitHub hoặc Google, nếu bạn đăng nhập bằng các dịch vụ đó;",
              "các phiên đăng nhập của bạn: địa chỉ IP, user agent của trình duyệt, và tên thiết bị đối với phiên trên máy tính.",
            ],
          },
          "Chúng tôi dùng dữ liệu này để bạn đăng nhập và để hiển thị các phiên của bạn. Phiên bị xoá khi hết hạn hoặc khi bạn đăng xuất. Mọi thứ bị xoá khi bạn xoá tài khoản.",
          "Dịch vụ chạy trên Cloudflare; Cloudflare xử lý dữ liệu này thay chúng tôi với vai trò nhà cung cấp hạ tầng. Trang tài khoản dùng cookie để giữ bạn đăng nhập, và ghi nhớ ngôn ngữ bạn chọn trong trình duyệt.",
        ],
      },
      {
        id: "sayitok",
        title: "Hungi, trước đây là Say It OK (iOS, Android)",
        blocks: [
          "Hungi lưu trên máy chủ của chúng tôi:",
          {
            list: [
              "**Tài khoản:** mã người dùng xDev, email và tên hiển thị do Apple hoặc Google cung cấp khi bạn đăng nhập.",
              "**Học tập:** cách xưng hô, mục tiêu, ngôn ngữ đang học, kết quả bài kiểm tra, tiến độ bài học, từ vựng, điểm và huy hiệu.",
              "**Hội thoại với AI:** chữ của câu bạn nói (sau khi được nhận dạng) và câu trả lời, để gia sư và cố vấn hiểu ngữ cảnh.",
              "**Mức dùng AI:** số lần gọi AI theo từng tính năng, thời gian xử lý và số token, gắn với tài khoản để tính giới hạn mỗi ngày. Phần này không lưu nội dung câu hỏi hay câu trả lời.",
              "**Gói đăng ký (iPhone):** mã giao dịch Apple, loại gói và ngày hết hạn. Chúng tôi không nhận số thẻ hay thông tin thanh toán.",
            ],
          },
          "Ứng dụng lưu thời điểm và phiên bản điều khoản bạn đã đồng ý.",
          "**Giọng nói.** Trên iPhone, giọng nói được nhận dạng bằng công cụ của Apple: ngay trên máy khi máy hỗ trợ ngôn ngữ đó, nếu không thì qua máy chủ của Apple theo chính sách của Apple. Trên Android, ứng dụng dùng dịch vụ nhận dạng giọng nói có sẵn của điện thoại (thường do Google cung cấp), dịch vụ đó xử lý âm thanh theo chính sách của nhà cung cấp. Ứng dụng không gửi bản ghi âm lên máy chủ của chúng tôi, chỉ gửi phần chữ khi cần chấm điểm hoặc trò chuyện với AI.",
          "**Camera, ảnh và dịch.** Tính năng \"Chụp chữ để học\" nhận chữ trong ảnh ngay trên điện thoại (Vision của Apple hoặc ML Kit của Google). Ảnh không được lưu và không gửi lên máy chủ; ứng dụng chỉ xin quyền camera khi bạn bấm chụp. Tính năng dịch dùng bộ dịch có sẵn trên điện thoại (Apple Translation hoặc ML Kit) khi có, chạy không cần mạng. Khi điện thoại chưa dịch được, phần chữ cần dịch (không kèm giọng nói hay ảnh) được gửi qua máy chủ AI của xDev tới nhà cung cấp mô hình ngôn ngữ để dịch; câu ngắn (tối đa 160 ký tự) và bản dịch của nó được lưu lại để dùng chung, không gắn với tài khoản của bạn.",
          "**AI.** Khi có thể, AI chạy ngay trên máy. Khi cần AI mạnh hơn, phần chữ của câu hỏi được gửi qua máy chủ AI của xDev tới nhà cung cấp mô hình ngôn ngữ để tạo câu trả lời.",
          "**Học theo thói quen.** Ứng dụng tự học trên máy giờ bạn hay học và độ dài bài bạn hay học xong, để chọn giờ nhắc học và gợi ý số phút. Chỉ các con số tổng hợp (số lần học theo giờ và theo thứ, nhắc học có được làm theo không, tổng số phút) được lưu mã hoá trên máy và đồng bộ lên máy chủ của chúng tôi để dùng chung giữa các máy của bạn; không gửi nội dung bài, giọng nói hay mốc thời gian từng lần học. Mục này bật sẵn; tắt trong Tôi → Cài đặt → Học theo thói quen của tôi thì dữ liệu này bị xoá trên máy và trên máy chủ.",
          "**Thống kê và báo lỗi (iOS, Android).** Firebase (Google) thu thống kê sử dụng ẩn danh (tên thao tác như mở bài, xong bài, kèm vài con số, và lựa chọn lúc bắt đầu như ngôn ngữ muốn học hay bạn biết đến ứng dụng qua đâu) và báo lỗi khi ứng dụng gặp sự cố; chúng tôi chỉ gửi mã người dùng nội bộ, không gửi email, tên, giọng nói hay bài làm. Mục này bật sẵn; bạn tắt bất cứ lúc nào trong ứng dụng: Tôi → Cài đặt → Gửi báo lỗi và thống kê.",
          "**Quảng cáo (bản miễn phí, iPhone và Android).** Google AdMob hiển thị quảng cáo ở bản miễn phí. Trên iPhone, quảng cáo cá nhân hoá chỉ dùng khi bạn cho phép theo dõi trong hộp thoại của iOS, tắt được trong Cài đặt → Quyền riêng tư & Bảo mật → Theo dõi. Trên Android, ứng dụng luôn yêu cầu quảng cáo không cá nhân hoá; AdMob vẫn nhận mã quảng cáo của máy, vị trí ước lượng theo địa chỉ IP và thông tin thiết bị để hiển thị quảng cáo, giới hạn tần suất và chống gian lận, theo chính sách của Google. Người dùng Plus không thấy quảng cáo.",
          "Máy chủ của Hungi chạy trên máy chủ của chúng tôi, truy cập qua Cloudflare. Dữ liệu chỉ được chia sẻ với các nhà cung cấp dịch vụ nêu trên, trong phạm vi cần để vận hành ứng dụng.",
          "**Xoá dữ liệu.** Trong ứng dụng: Tôi → Cài đặt → Xoá tài khoản. Không cần ứng dụng: xem trang [Xoá tài khoản Hungi](/vi/delete-account/). Mọi dữ liệu trên đều bị xoá khỏi máy chủ khi tài khoản bị xoá.",
        ],
      },
      {
        id: "websites",
        title: "Trang web này",
        blocks: [
          "xdev.asia không đặt cookie và không chạy analytics. Trang được đặt trên GitHub Pages; như mọi máy chủ web, GitHub nhận địa chỉ IP của bạn khi trình duyệt tải trang, theo [tuyên bố quyền riêng tư của GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).",
        ],
      },
      {
        id: "support-data",
        title: "Khi bạn liên hệ với chúng tôi",
        blocks: [
          "Nếu bạn gửi email, chúng tôi giữ thư và địa chỉ của bạn trong thời gian cần để trả lời và theo dõi. Nếu bạn mở issue trên GitHub, issue đó công khai và tuyên bố quyền riêng tư của GitHub được áp dụng.",
        ],
      },
      {
        id: "rights",
        title: "Lựa chọn và quyền của bạn",
        blocks: [
          "Bạn có thể xem, sửa hoặc xoá tài khoản xDev trong ứng dụng. Bạn cũng có thể yêu cầu chúng tôi cung cấp bản sao dữ liệu chúng tôi có về bạn, hoặc yêu cầu sửa hay xoá, bằng cách viết tới [duy@xdev.asia](mailto:duy@xdev.asia).",
        ],
      },
      {
        id: "children",
        title: "Trẻ em",
        blocks: ["Các ứng dụng của chúng tôi dành cho người lớn: công cụ cho lập trình viên và Hungi. Chúng không hướng tới trẻ em, và chúng tôi không cố ý thu thập dữ liệu của trẻ em dưới 13 tuổi."],
      },
      {
        id: "changes",
        title: "Thay đổi và liên hệ",
        blocks: [
          "Mọi thay đổi của chính sách này được đăng trên trang này kèm ngày hiệu lực mới.",
          "Câu hỏi về dữ liệu của bạn: [duy@xdev.asia](mailto:duy@xdev.asia).",
          "Chính sách này có bản tiếng Anh và tiếng Việt. Nếu hai bản khác nhau, bản tiếng Anh được áp dụng.",
        ],
      },
    ],
  },

  support: {
    title: "Hỗ trợ",
    stamp: "Trợ giúp cho các ứng dụng xDev",
    summary: "Cách nhanh nhất để liên hệ là mở issue trên GitHub trong kho của ứng dụng. Hãy cho chúng tôi biết phiên bản hệ điều hành và phiên bản ứng dụng.",
    sections: [
      {
        id: "contact",
        title: "Nhận trợ giúp",
        blocks: [
          {
            list: [
              "Hungi: [duy@xdev.asia](mailto:duy@xdev.asia). Xoá tài khoản: xem [Xoá tài khoản Hungi](/vi/delete-account/).",
              "xDev UI: [mở issue](https://github.com/xdev-asia/xdev-ui/issues)",
              "Tài khoản hoặc dữ liệu của bạn: [duy@xdev.asia](mailto:duy@xdev.asia)",
            ],
          },
          "Vui lòng ghi kèm phiên bản hệ điều hành và phiên bản ứng dụng (trong cửa sổ About của ứng dụng).",
        ],
      },
      {
        id: "legal",
        title: "Điều khoản và quyền riêng tư",
        blocks: ["[Điều khoản sử dụng](/vi/terms/) và [Chính sách quyền riêng tư](/vi/privacy/) áp dụng cho mọi ứng dụng xDev."],
      },
    ],
  },

  "delete-account": {
    title: "Xoá tài khoản Hungi",
    stamp: `Hungi của xDev · ${UPDATED}`,
    summary: "Bạn có thể xoá tài khoản Hungi và toàn bộ dữ liệu học tập bất cứ lúc nào, trong ứng dụng hoặc qua email.",
    sections: [
      {
        id: "in-app",
        title: "Cách 1: trong ứng dụng",
        blocks: [{ list: ["Mở Hungi và đăng nhập.", "Vào **Tôi → Cài đặt → Xoá tài khoản** và xác nhận. Tài khoản và dữ liệu bị xoá ngay."] }],
      },
      {
        id: "by-email",
        title: "Cách 2: không cần ứng dụng",
        blocks: [
          "Gửi email tới [duy@xdev.asia](mailto:duy@xdev.asia?subject=Xo%C3%A1%20t%C3%A0i%20kho%E1%BA%A3n%20Hungi) với tiêu đề \"Xoá tài khoản Hungi\", từ địa chỉ email bạn dùng để đăng nhập (Apple hoặc Google). Chúng tôi xác nhận và xoá trong vòng 30 ngày.",
        ],
      },
      {
        id: "what",
        title: "Dữ liệu bị xoá",
        blocks: [
          {
            list: [
              "Tài khoản: mã người dùng, email, tên hiển thị.",
              "Học tập: xưng hô, mục tiêu, kết quả kiểm tra, tiến độ, từ vựng, điểm, huy hiệu, hội thoại với AI.",
              "Gói đăng ký: mã giao dịch, loại gói, ngày hết hạn.",
            ],
          },
          "Chúng tôi không giữ lại bản sao nào sau khi xoá, trừ bản sao lưu tự động của máy chủ: bản sao lưu bị ghi đè sau tối đa 14 ngày.",
        ],
      },
      {
        id: "subscription",
        title: "Gói đăng ký",
        blocks: ["Gói Hungi Plus trên App Store không tự huỷ khi xoá tài khoản. Hãy huỷ trong Cài đặt iPhone → tên của bạn → Đăng ký."],
      },
    ],
  },

  notFound: { title: "Không tìm thấy trang", body: "Không có gì ở địa chỉ này.", home: "Về trang chủ" },
  brand: {
    eyebrow: "xdev.asia / brand",
    title: "Thương hiệu",
    lede: "Logo xDev là hai lưỡi gấp cắt nhau thành chữ x. Lưỡi xanh là bạn. Lưỡi cam là agent. Chỗ hai lưỡi gặp nhau thì sáng lên.",
    logoTitle: "Logo",
    versions: {
      icon: { name: "Icon", body: "Bản chính: nền tối, hai lưỡi được chiếu sáng từ trên, lõi sáng ở giữa. Dùng từ 48 px trở lên." },
      blue: { name: "Icon xanh", body: "Bản phụ, chỉ dành cho thương hiệu cha, khi icon tối không hợp." },
      lit: { name: "Logo có ánh sáng", body: "Logo không nền, cho bề mặt tối." },
      flat: { name: "Logo phẳng", body: "Cho bề mặt sáng, in ấn và một màu. Lưỡi của bạn lấy màu chữ." },
      tile: { name: "Tile nhỏ", body: "Bản phẳng cho 16 đến 32 px: favicon và avatar nhỏ." },
    },
    download: "Tải SVG",
    systemsTitle: "Hệ thống",
    systemsIntro: "Mọi hệ thống của xDev giữ lưỡi của bạn ở cùng một chỗ. Chỉ phía agent thay đổi. Không hệ thống nào có màu riêng.",
    systems: {
      xdev: { body: "Logo cha: xDev nói chung, và mọi ứng dụng chưa có logo riêng.", shape: "Lưỡi cam: agent cắt ngang đường của bạn." },
      ui: { body: "Design token và component React dùng chung cho mọi giao diện xDev.", shape: "Bốn ô với bốn sắc độ, như một hàng token." },
    },
    colourTitle: "Màu",
    colours: {
      blue: { name: "Xanh xDev", use: "Lưỡi của bạn trong logo phẳng, và màu nhấn của giao diện." },
      orange: { name: "Cam agent", use: "Phía agent của mọi logo. Không dùng ở nơi nào khác." },
      you: { name: "Lưỡi của bạn, có ánh sáng", use: "Sáng ở trên, tối hơn ở dưới nếp gấp." },
      agent: { name: "Lưỡi agent, có ánh sáng", use: "Cùng nếp gấp đó, màu cam." },
      ground: { name: "Nền icon", use: "Tối, có quầng xanh ở phía bạn và quầng cam ở phía agent." },
      core: { name: "Lõi", use: "Nơi hai lưỡi chồng lên nhau. Điểm sáng nhất của logo." },
    },
    typeTitle: "Chữ",
    type: [
      "Tên được đặt bằng **Be Vietnam Pro 800**. Tên của một hệ thống đi sau, độ đậm 500 và nhạt hơn một bậc: **xDev** UI.",
    ],
    rulesTitle: "Quy tắc",
    rules: [
      "Để khoảng trống quanh logo ít nhất bằng bề rộng một lưỡi.",
      "Không đổi màu phía agent. Nó luôn là #ff7a3d.",
      "Không đảo hai lưỡi. Bạn ở bên trái.",
      "Không dùng hình agent mà thiếu lưỡi của bạn.",
      "Không kéo giãn, xoay, hay thêm hiệu ứng khác lên icon.",
    ],
    filesTitle: "File",
    files: [
      "Mỗi hình trên trang này dẫn tới file SVG của nó. Hãy dùng các file này, đừng vẽ lại logo.",
      "Bộ đầy đủ, gồm cả icon ứng dụng cho iOS và Android, nằm trong design system: [xdev-ui/assets/brand](https://github.com/xdev-asia/xdev-ui/tree/main/assets/brand).",
    ],
  },
  footer: {
    lede: "Công cụ AI, ứng dụng và dạy học của Trần Đức Duy.",
    appsTitle: "Sản phẩm",
    xdevTitle: "xDev",
    contactTitle: "Liên hệ",
    trademarks: "Tên sản phẩm và logo thuộc về chủ sở hữu của chúng.",
  },
};
