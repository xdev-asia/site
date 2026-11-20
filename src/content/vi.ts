import type { Content } from "./types";

const UPDATED = "Có hiệu lực từ 20/11/2026";

export const vi: Content = {
  meta: {
    home: { title: "xDev", description: "xDev làm công cụ cho lập trình viên làm việc cùng AI coding agent." },
    terms: { title: "Điều khoản sử dụng · xDev", description: "Điều khoản áp dụng cho mọi ứng dụng, trang web và dịch vụ của xDev." },
    privacy: { title: "Chính sách quyền riêng tư · xDev", description: "Mỗi ứng dụng, trang web và dịch vụ của xDev làm gì với dữ liệu của bạn." },
    support: { title: "Hỗ trợ · xDev", description: "Cách nhận trợ giúp cho ứng dụng của xDev." },
    brand: { title: "Thương hiệu · xDev", description: "Logo xDev, logo của các hệ thống con, màu và quy tắc dùng, kèm file tải về." },
    notFound: { title: "Không tìm thấy trang · xDev", description: "Trang này không tồn tại." },
  },
  nav: { brand: "Thương hiệu", terms: "Điều khoản", privacy: "Quyền riêng tư", support: "Hỗ trợ", legal: "Pháp lý", lang: "Ngôn ngữ", contents: "Trong trang này" },
  home: {
    eyebrow: "xdev.asia",
    headline: "Công cụ cho người làm việc cùng coding agent",
    lede: "xDev làm công cụ cho lập trình viên làm việc cùng AI coding agent. Mã nguồn và dữ liệu của bạn nằm trên máy của bạn.",
    aboutTitle: "Giới thiệu",
    about: [
      "xDev là tên chung của các ứng dụng trên trang này. Phần nào mở được thì chúng tôi làm mở: bộ giao diện là mã nguồn mở trên GitHub.",
      "Trang này là nơi đặt những thứ áp dụng chung cho tất cả: [Điều khoản sử dụng](/vi/terms/), [Chính sách quyền riêng tư](/vi/privacy/) và [Hỗ trợ](/vi/support/).",
    ],
    appsTitle: "Ứng dụng",
    apps: [
      {
        name: "Tài khoản xDev",
        glyph: "id",
        platform: "Web",
        body: "Một lần đăng nhập cho các ứng dụng và dịch vụ của xDev, có trang để xem và kết thúc các phiên đăng nhập.",
        links: [{ label: "id.xdev.asia", href: "https://id.xdev.asia" }],
      },
      {
        name: "xDev UI",
        glyph: "ui",
        platform: "React",
        body: "Bộ design token và component React dùng để làm các ứng dụng xDev. Trang này cũng dùng bộ đó.",
        links: [
          { label: "ui.xdev.asia", href: "https://ui.xdev.asia" },
          { label: "Mã nguồn", href: "https://github.com/xdev-asia/xdev-ui" },
        ],
      },
    ],
    principlesTitle: "Cách chúng tôi làm",
    principles: [
      { title: "Ưu tiên máy của bạn", body: "Mã nguồn, tài liệu và phiên làm việc nằm trên máy của bạn, trừ khi bạn chọn gửi đi nơi khác." },
      { title: "Bạn xác nhận", body: "Ứng dụng cho bạn xem nó sắp làm gì trước khi thay đổi hay xoá bất cứ thứ gì." },
      { title: "Không theo dõi", body: "Không quảng cáo, không analytics. Chính sách quyền riêng tư ghi rõ từng ứng dụng dùng dữ liệu gì." },
    ],
    contactTitle: "Liên hệ",
    contact: [
      "Cần trợ giúp với ứng dụng: xem trang [Hỗ trợ](/vi/support/).",
      "Câu hỏi về dữ liệu của bạn: [privacy@xdev.asia](mailto:privacy@xdev.asia).",
      "Mã nguồn và báo lỗi: [github.com/xdev-asia](https://github.com/xdev-asia).",
    ],
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
          "Điều khoản này là thoả thuận giữa bạn và xDev (\"chúng tôi\"). Nó áp dụng cho mọi ứng dụng, trang web và dịch vụ trực tuyến do chúng tôi phát hành và có dẫn tới trang này: tài khoản xDev tại id.xdev.asia và trang web này. Dưới đây gọi chung là \"ứng dụng\".",
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
          "Hãy giữ an toàn thông tin đăng nhập và báo cho chúng tôi nếu bạn nghĩ có người khác đang dùng tài khoản của bạn. Bạn có thể xoá tài khoản bất cứ lúc nào tại id.xdev.asia.",
        ],
      },
      {
        id: "paid",
        title: "Tính năng trả phí",
        blocks: [
          "Các ứng dụng liệt kê trên trang này hiện miễn phí. Nếu chúng tôi có gói hoặc giao dịch trả phí, bạn sẽ thấy giá và nội dung trước khi thanh toán, và điều khoản hiển thị tại thời điểm đó áp dụng cho giao dịch.",
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
          "Câu hỏi về điều khoản này: [privacy@xdev.asia](mailto:privacy@xdev.asia), hoặc mở issue tại [github.com/xdev-asia](https://github.com/xdev-asia).",
          "Điều khoản này có bản tiếng Anh và tiếng Việt. Nếu hai bản khác nhau, bản tiếng Anh được áp dụng.",
        ],
      },
    ],
  },

  privacy: {
    title: "Chính sách quyền riêng tư",
    stamp: `Mọi ứng dụng, trang web và dịch vụ của xDev · ${UPDATED}`,
    summary:
      "Ứng dụng của chúng tôi chạy trên thiết bị của bạn và chúng tôi không nhìn thấy tệp của bạn. Chúng tôi không quảng cáo, không analytics và không bán dữ liệu. Dữ liệu cá nhân duy nhất chúng tôi lưu là những gì tài khoản xDev cần để bạn đăng nhập.",
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
              "Không quảng cáo và không dùng mã định danh quảng cáo.",
              "Không có mã analytics hay theo dõi, của chúng tôi hay của bên nào khác.",
              "Chúng tôi không bán hay cho thuê dữ liệu cá nhân.",
              "Tệp và mã nguồn của bạn được xử lý trên thiết bị của bạn. Chúng tôi không nhận được chúng.",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "Tài khoản xDev (id.xdev.asia)",
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
          "Bạn có thể xem, sửa hoặc xoá tài khoản xDev tại id.xdev.asia. Bạn cũng có thể yêu cầu chúng tôi cung cấp bản sao dữ liệu chúng tôi có về bạn, hoặc yêu cầu sửa hay xoá, bằng cách viết tới [privacy@xdev.asia](mailto:privacy@xdev.asia).",
        ],
      },
      {
        id: "children",
        title: "Trẻ em",
        blocks: ["Các ứng dụng là công cụ cho lập trình viên. Chúng không hướng tới trẻ em, và chúng tôi không cố ý thu thập dữ liệu của trẻ em."],
      },
      {
        id: "changes",
        title: "Thay đổi và liên hệ",
        blocks: [
          "Mọi thay đổi của chính sách này được đăng trên trang này kèm ngày hiệu lực mới.",
          "Câu hỏi về dữ liệu của bạn: [privacy@xdev.asia](mailto:privacy@xdev.asia).",
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
              "xDev UI: [mở issue](https://github.com/xdev-asia/xdev-ui/issues)",
              "Tài khoản hoặc dữ liệu của bạn: [privacy@xdev.asia](mailto:privacy@xdev.asia)",
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
  footer: "© 2026 xDev",
};
