// ============================================================
// CẤU HÌNH TAILWIND (BẢNG MÀU & FONT THƯƠNG HIỆU)
// ============================================================
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                },
                colors: {
                    brand: {
                        navy: '#21354D',      // Màu chữ logo & menu chính
                        brown: '#8D6644',     // Màu nút Đặt chỗ trước
                        brownDark: '#735133', // Màu hover nút chính
                        caramel: '#A67850',   // Màu nền chữ tiêu đề hero & bán nguyệt
                        cream: '#FAF7F2',     // Màu nền ấm nhẹ cho các section
                        sand: '#EFE7DC',      // Màu viền/nền phụ ấm
                    }
                }
            }
        }
    };
}

// ============================================================
// 0. CẤU HÌNH LIÊN KẾT GOOGLE SHEETS (APPS SCRIPT WEB APP)
// ============================================================
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyJtgpJipFLg0XEFvunpcZnlrJoiXqkxd037YnGHTZuyUGXQrSJ1lKmuwQ55PFtWyfl/exec';

// ============================================================
// 1. DỮ LIỆU CÁC MÔ HÌNH PHÒNG BOX TẠI RELAX TIME
// ============================================================
const BOX_SPACES = [
    {
        id: 'sleepbox',
        name: 'Sleepbox Riêng Tư',
        shortName: 'Sleepbox',
        badge: 'Nghỉ ngơi & Làm việc',
        capacity: '1 - 2 người',
        defaultGuests: 1,
        maxGuests: 2,
        pricePerHour: 59000,
        tagline: 'Chốn nghỉ trưa êm ái & góc học tập yên tĩnh tuyệt đối',
        description: 'Không gian gỗ ấm áp được trang bị nệm cao cấp, chăn gối sạch thơm mỗi lượt, bàn xếp làm việc cùng đèn vàng dịu nhẹ giúp bạn nạp lại năng lượng nhanh chóng.',
        amenities: [
            'Nệm êm ái & chăn gối vệ sinh mỗi lượt',
            'Rèm / cửa riêng tư yên tĩnh 100%',
            'Bàn làm việc mini, ổ cắm & Wi-Fi tốc độ cao',
            'Đèn đọc sách chỉnh sáng & quạt/máy lạnh mát mẻ',
            'Ưu đãi -10% khi gọi kèm nước từ 35k trở lên',
            'Miễn phí trà đá thanh mát'
        ],
        image: 'https://img.iproperty.com.my/angel/1500x2000-fit/wp-content/uploads/sites/7/2023/05/sleep-box-6.jpg',
        fallback: 'https://placehold.co/800x500/8D6644/FAF7F2?text=Sleepbox+Relax+Time'
    },
    {
        id: 'ps5',
        name: 'Box Chơi PS5',
        shortName: 'Box PS5',
        badge: 'Gaming & Giải trí',
        capacity: '2 - 4 người',
        defaultGuests: 2,
        maxGuests: 4,
        pricePerHour: 99000,
        tagline: 'Chiến game cực mượt trên màn hình 4K sắc nét trong phòng riêng',
        description: 'Trang bị máy PlayStation 5 chính hãng, tay cầm DualSense rung phản hồi chân thực cùng kho game hot nhất (FC 25, Tekken 8, It Takes Two, GTA V...) và ghế sofa siêu êm.',
        amenities: [
            'Máy PS5 chính hãng + sẵn 2-4 tay cầm DualSense',
            'Smart TV 4K 55-65 inch, âm thanh sống động',
            'Kho hơn 50 tựa game hot cập nhật liên tục',
            'Sofa bệt êm ái & cách âm thoải mái hò reo',
            'Hỗ trợ xem Netflix / YouTube miễn phí',
            'Phục vụ đồ ăn & nước uống tận phòng'
        ],
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1000&q=85',
        fallback: 'https://placehold.co/800x500/21354D/FAF7F2?text=PS5+Gaming+Box'
    },
    {
        id: 'group4',
        name: 'Box 4 Người Hội Nhóm',
        shortName: 'Box 4 người',
        badge: 'Hội bạn thân',
        capacity: '3 - 4 người',
        defaultGuests: 4,
        maxGuests: 5,
        pricePerHour: 139000,
        tagline: 'Không gian ấm cúng cho nhóm bạn tụ họp, xem phim & boardgame',
        description: 'Thiết kế rộng rãi cho nhóm 4 người với đệm sàn êm ái, bàn lớn dễ dàng ăn uống, chơi boardgame hoặc họp nhóm chạy deadline mà không lo bị làm phiền.',
        amenities: [
            'Không gian riêng tư rộng rãi cho nhóm 3-4 người',
            'Smart TV hỗ trợ Netflix, YouTube & chiếu màn hình',
            'Miễn phí kho Boardgame (Ma Sói, Uno, Mèo Nổ...)',
            'Bàn gỗ lớn tiện ăn uống & đặt laptop làm việc',
            'Ưu đãi -10% khi kèm Combo Cơm gà chua ngọt 69k',
            'Ổ cắm đa năng & Wi-Fi riêng ổn định'
        ],
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85',
        fallback: 'https://placehold.co/800x500/A67850/FAF7F2?text=Box+4+Nguoi'
    },
    {
        id: 'luxury',
        name: 'Box Luxury (6+ Người)',
        shortName: 'Box Luxury 6+',
        badge: 'VIP Party & Nhóm đông',
        capacity: '6 - 10 người',
        defaultGuests: 6,
        maxGuests: 12,
        pricePerHour: 249000,
        tagline: 'Phòng Box hạng sang chuẩn VIP cho tiệc nhỏ, sinh nhật & hội bạn đông',
        description: 'Hạng phòng lớn và cao cấp nhất tại Relax Time với sofa chữ L rộng rãi, màn hình lớn 75 inch 4K, máy lạnh độc lập và đặc quyền phục vụ nhanh chóng cho nhóm từ 6 người trở lên.',
        amenities: [
            'Phòng lớn chuẩn VIP sức chứa 6 - 10 người thoải mái',
            'Smart TV 75 inch 4K + tùy chọn PS5 & Karaoke nhẹ',
            'Sofa chữ L cao cấp & ánh sáng chill đa chế độ',
            'Máy lạnh độc lập & cách âm cao cấp',
            'Ưu đãi -20% khi kèm Combo Cá viên chiên thập cẩm 129k',
            'Hỗ trợ trang trí sinh nhật cơ bản theo yêu cầu'
        ],
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
        fallback: 'https://placehold.co/800x500/735133/FAF7F2?text=Box+Luxury+6+'
    },
    {
        id: 'netcouple',
        name: 'Phòng Net Couple Sofa',
        shortName: 'Net Couple',
        badge: 'Gaming Couple • i5 & RTX 3060',
        capacity: '2 người',
        defaultGuests: 2,
        maxGuests: 2,
        pricePerHour: 119000,
        tagline: 'Phòng đôi sofa êm ái cùng 2 dàn PC cấu hình tầm trung i5 đời cuối & RTX 3060',
        description: 'Không gian phòng net riêng tư dành cho cặp đôi hoặc đôi bạn thân cày game, trang bị ghế sofa đôi êm ái cùng 2 bộ PC Intel Core i5 thế hệ mới nhất kết hợp card đồ họa RTX 3060 chiến mượt mọi tựa game hot.',
        amenities: [
            '2 bộ PC cấu hình Intel Core i5 đời cuối + VGA RTX 3060',
            'Màn hình gaming sắc nét & full gear bàn phím cơ, tai nghe',
            'Ghế sofa đôi rộng rãi êm ái cho 2 người tựa lưng cùng nhau',
            'Phòng riêng tư cách âm, máy lạnh mát lạnh thoải mái',
            'Đặt từ 3 giờ trở lên giảm thêm 10% tiền phòng',
            'Phục vụ đồ ăn & nước uống tận phòng'
        ],
        image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1000&q=85',
        fallback: 'https://placehold.co/800x500/21354D/FAF7F2?text=Net+Couple+Sofa+RTX+3060'
    },
    {
        id: 'karaoke2',
        name: 'Karaoke Box 2 Người',
        shortName: 'Karaoke 2N',
        badge: 'Karaoke Mini • 2 Người',
        capacity: '1 - 2 người',
        defaultGuests: 2,
        maxGuests: 2,
        pricePerHour: 49000,
        tagline: 'Phòng hát mini riêng tư cực chill cho cặp đôi hoặc hát solo giải tỏa căng thẳng',
        description: 'Mô hình Karaoke Box mini hiện đại cách âm tốt, trang bị 2 micro không dây bắt giọng êm, màn hình chọn bài thông minh kho nhạc cập nhật liên tục cùng ánh sáng LED sống động.',
        amenities: [
            'Hệ thống âm thanh sống động + 2 micro không dây chuẩn phòng hát',
            'Màn hình chọn bài cảm ứng, kho nhạc mới cập nhật liên tục',
            'Cách âm tốt, không gian riêng tư & ánh sáng LED cực chill',
            'Đặt từ 3 giờ trở lên giảm thêm 10% tiền phòng',
            'Ưu đãi -10% khi gọi kèm nước từ 35k trở lên',
            'Phục vụ đồ ăn & nước uống tận cửa Box'
        ],
        image: 'https://bcec.vn/upload/image/lap-dat-11-phong-karaoke-box-mini-cho-quan-boom-music-box-tai-tphcm-14.webp',
        fallback: 'https://placehold.co/800x500/8D6644/FAF7F2?text=Karaoke+Box+2+Nguoi+49k'
    },
    {
        id: 'karaoke46',
        name: 'Karaoke Box 4 - 6 Người',
        shortName: 'Karaoke 4-6N',
        badge: 'Karaoke Nhóm • 4 - 6 Người',
        capacity: '4 - 6 người',
        defaultGuests: 4,
        maxGuests: 6,
        pricePerHour: 109000,
        tagline: 'Phòng hát nhóm rộng rãi, dàn âm thanh bùng nổ cho hội bạn thân tụ họp',
        description: 'Không gian Karaoke Box cỡ lớn dành cho nhóm 4 đến 6 người với ghế sofa êm ái, dàn loa công suất chuẩn, hệ thống ánh sáng tiệc tùng sinh động và bàn lớn thoải mái gọi đồ ăn thức uống.',
        amenities: [
            'Dàn âm thanh công suất lớn + micro không dây bắt giọng mượt',
            'Sofa dài rộng rãi & bàn tiệc thoải mái cho nhóm 4 - 6 người',
            'Smart TV màn hình lớn & hệ thống đèn LED tiệc tùng sống động',
            'Đặt từ 3 giờ trở lên giảm thêm 10% tiền phòng',
            'Ưu đãi -10% khi kèm Combo Cơm gà 69k hoặc nước từ 35k',
            'Cách âm chuyên nghiệp, máy lạnh độc lập mát mẻ'
        ],
        image: 'https://penconcept.vn/wp-content/uploads/2025/11/z7236261645192_377e2719c54563d5001ba7765734c7a9-1024x1024.jpg',
        fallback: 'https://placehold.co/800x500/21354D/FAF7F2?text=Karaoke+Box+4-6+Nguoi+109k'
    },
    {
        id: 'openlounge',
        isWalkInFree: true,
        name: 'Phòng Chung Gối Lười (Open Lounge)',
        shortName: 'Phòng Gối Lười',
        badge: 'Miễn phí • Không cần đặt trước',
        capacity: 'Không gian chung rộng rãi',
        defaultGuests: 1,
        maxGuests: 1,
        pricePerHour: 0,
        tagline: 'Căn phòng chung rộng rãi với ghế gối lười êm ái — Free phòng, không giới hạn thời gian',
        description: 'Không gian mở ấm cúng không phải phòng private, được bày trí nhiều ghế gối lười (beanbag) to êm ái cùng bàn thấp mini. Bạn chỉ cần ghé quán mua 1 món nước bất kỳ là được thoải mái nằm nghỉ ngơi, đọc sách, lướt điện thoại không giới hạn thời gian mà không cần đặt chỗ trước.',
        amenities: [
            'Miễn phí 100% tiền phòng — chỉ cần mua nước là được nghỉ ngơi',
            'Không giới hạn thời gian nghỉ, thoải mái thư giãn cả ngày',
            'Không cần đặt chỗ trước, ghé trực tiếp bất cứ lúc nào',
            'Nhiều ghế gối lười (beanbag) cỡ lớn siêu êm & bàn thấp tiện lợi',
            'Không gian chung sàn gỗ ấm cúng, ánh sáng dịu nhẹ & kệ sách',
            'Wi-Fi tốc độ cao, máy lạnh mát mẻ & phục vụ nước tận nơi'
        ],
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
        fallback: 'https://placehold.co/800x500/8D6644/FAF7F2?text=Phong+Chung+Goi+Luoi+Free'
    },
    {
        id: 'bida',
        isWalkInOnly: true,
        name: 'Khu Vực Chơi Bida',
        shortName: 'Khu vực Bida',
        badge: 'Không cần đặt trước • 59k/h',
        capacity: '2 - 4 người / bàn',
        defaultGuests: 2,
        maxGuests: 4,
        pricePerHour: 59000,
        tagline: 'Bàn bida chuẩn câu lạc bộ, ánh sáng đẹp — Ghé chơi trực tiếp không cần đặt trước',
        description: 'Không gian giải trí bida rộng rãi, thoáng mát ngay trong khuôn viên Relax Time với bàn bida phẳng chuẩn, cơ bida tuyển chọn và khu ghế chờ thoải mái. Mô hình phục vụ khách ghé trực tiếp không cần đặt chỗ trước với mức giá chỉ 59.000đ/giờ.',
        amenities: [
            'Giá chơi chỉ 59.000đ/giờ — không cần đặt chỗ trước, đến là chơi',
            'Bàn bida lỗ chuẩn kích thước, nỉ mới mịn & bi cao cấp',
            'Trang bị sẵn đầy đủ cơ bida, lơ, giá để cơ & bảng tính điểm',
            'Hệ thống đèn chiếu bàn chuẩn không chói mắt, máy lạnh mát mẻ',
            'Ghế chờ êm ái cho bạn bè ngồi cổ vũ & thưởng thức đồ uống',
            'Phục vụ trọn bộ thực đơn đồ ăn & nước uống tận khu vực bàn chơi'
        ],
        image: 'https://cdn.xanhsm.com/2025/01/d0374a96-bida-quan-1-1.jpg',
        fallback: 'https://placehold.co/800x500/1E4D3B/FAF7F2?text=Khu+Vuc+Bida+59k%2Fh'
    }
];

// ============================================================
// 1.5. DỮ LIỆU THỰC ĐƠN ĐỒ ĂN & NƯỚC UỐNG ĐẶT KÈM PHÒNG
// ============================================================
const MENU_ITEMS = [
    // --- ĐỒ ĂN & COMBO ---
    {
        id: 'combo-com-ga',
        name: 'Cơm gà chua ngọt (Combo)',
        category: 'food',
        price: 69000,
        badge: 'Best Seller',
        promoNote: 'Box 4 người thêm combo này giảm 10%',
        description: 'Cơm nóng hổi kết hợp gà chiên giòn sốt chua ngọt đậm đà chuẩn vị quán, món bán chạy nhất tại Relax Time.',
        image: './comga.jpg',
        fallback: 'https://placehold.co/600x400/A67850/FAF7F2?text=Com+Ga+Chua+Ngot'
    },
    {
        id: 'combo-ca-vien',
        name: 'Combo Cá viên chiên thập cẩm',
        category: 'food',
        price: 129000,
        badge: 'Combo Luxury -20%',
        promoNote: 'Box Luxury thêm combo này giảm 20%',
        description: 'Mẹt lớn đầy đặn gồm cá viên, bò viên, tôm viên, xúc xích, phô mai que chiên giòn rụm ăn kèm tương ớt & đồ chua cho nhóm đông.',
        image: './thapcam.jpg',
        fallback: 'https://placehold.co/600x400/8D6644/FAF7F2?text=Combo+Ca+Vien+129k'
    },
    {
        id: 'ca-vien-nho',
        name: 'Cá viên chiên thập cẩm (Phần vừa)',
        category: 'food',
        price: 59000,
        badge: 'Ăn vặt',
        promoNote: '',
        description: 'Phần cá viên chiên giòn rụm vừa đủ cho 1 - 2 người nhâm nhi khi xem phim hoặc chơi PS5.',
        image: './cavien.png',
        fallback: 'https://placehold.co/600x400/8D6644/FAF7F2?text=Ca+Vien+Chien'
    },
    {
        id: 'mi-xao-bo',
        name: 'Mì xào bò',
        category: 'food',
        price: 55000,
        badge: 'Món nóng',
        promoNote: '',
        description: 'Mì dai thơm xào cùng thịt bò mềm ngọt, cải xanh giòn và hành tỏi phi dậy mùi hấp dẫn.',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/735133/FAF7F2?text=Mi+Xao+Bo'
    },
    {
        id: 'tiramisu',
        name: 'Bánh Tiramisu',
        category: 'food',
        price: 45000,
        badge: 'Tráng miệng',
        promoNote: '',
        description: 'Cốt bánh mềm mịn thấm đẫm hương cà phê espresso hòa quyện lớp kem mascarpone béo nhẹ phủ bột cacao.',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/5C3D28/FAF7F2?text=Banh+Tiramisu'
    },

    // --- NƯỚC PHA CHẾ CƠ BẢN ---
    {
        id: 'ca-phe-sua',
        name: 'Cà phê sữa đá',
        category: 'drink-crafted',
        price: 35000,
        badge: 'Ưu đãi Sleepbox',
        promoNote: 'Sleepbox thêm nước từ 35k giảm 10%',
        description: 'Cà phê rang xay pha máy đậm đà hòa quyện sữa đặc béo thơm, tỉnh táo cho giờ làm việc.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/6F4E37/FAF7F2?text=Ca+Phe+Sua+Da'
    },
    {
        id: 'bac-xiu',
        name: 'Bạc xỉu đá',
        category: 'drink-crafted',
        price: 39000,
        badge: 'Ưu đãi Sleepbox',
        promoNote: 'Sleepbox thêm nước từ 35k giảm 10%',
        description: 'Vị sữa béo ngậy dịu nhẹ cùng chút hương cà phê thoang thoảng dễ uống.',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/A67850/FAF7F2?text=Bac+Xiu'
    },
    {
        id: 'tra-dao',
        name: 'Trà đào cam sả',
        category: 'drink-crafted',
        price: 42000,
        badge: 'Được yêu thích',
        promoNote: 'Sleepbox thêm nước từ 35k giảm 10%',
        description: 'Trà đen ủ thanh mát kết hợp miếng đào giòn, cam vàng và hương sả thư giãn.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/C97B4B/FAF7F2?text=Tra+Dao+Cam+Sa'
    },
    {
        id: 'matcha-latte',
        name: 'Matcha Latte',
        category: 'drink-crafted',
        price: 45000,
        badge: 'Pha chế',
        promoNote: 'Sleepbox thêm nước từ 35k giảm 10%',
        description: 'Bột trà xanh Nhật Bản thơm dịu đánh mịn cùng sữa tươi không đường mát lạnh.',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/5E7A52/FAF7F2?text=Matcha+Latte'
    },
    {
        id: 'tra-chanh-mat-ong',
        name: 'Trà chanh mật ong',
        category: 'drink-crafted',
        price: 35000,
        badge: 'Ưu đãi Sleepbox',
        promoNote: 'Sleepbox thêm nước từ 35k giảm 10%',
        description: 'Vị chua thanh của chanh tươi kết hợp mật ong ngọt dịu giải khát tức thì.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/D4A359/FAF7F2?text=Tra+Chanh+Mat+Ong'
    },
    {
        id: 'tra-sua-nuong',
        name: 'Trà sữa nướng',
        category: 'drink-crafted',
        price: 49000,
        badge: 'Món mới • Ưu đãi Sleepbox',
        promoNote: 'Sleepbox thêm nước từ 35k giảm 10%',
        description: 'Vị trà đậm đà hòa quyện sữa nướng caramel béo thơm đặc trưng, cực hợp nhâm nhi khi thư giãn tại quán.',
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/A67850/FAF7F2?text=Tra+Sua+Nuong+49k'
    },

    // --- NƯỚC NGỌT ---
    {
        id: 'coca',
        name: 'Coca-Cola mát lạnh',
        category: 'drink-soda',
        price: 22000,
        badge: 'Nước ngọt',
        promoNote: '',
        description: 'Lon Coca-Cola ướp lạnh kèm ly đá viên sảng khoái, cực hợp khi ăn cá viên chiên.',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/B22222/FAF7F2?text=Coca+Cola'
    },
    {
        id: 'pepsi',
        name: 'Pepsi ướp lạnh',
        category: 'drink-soda',
        price: 22000,
        badge: 'Nước ngọt',
        promoNote: '',
        description: 'Nước ngọt có gas mát lạnh phục vụ tận phòng cùng đá viên sạch.',
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/1E40AF/FAF7F2?text=Pepsi'
    },
    {
        id: '7up',
        name: '7Up vị chanh',
        category: 'drink-soda',
        price: 22000,
        badge: 'Nước ngọt',
        promoNote: '',
        description: 'Hương chanh thanh nhẹ, sảng khoái cho những trận game PS5 nảy lửa.',
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
        fallback: 'https://placehold.co/600x400/15803D/FAF7F2?text=7Up'
    },
    {
        id: 'sting',
        name: 'Sting dâu tăng lực',
        category: 'drink-soda',
        price: 25000,
        badge: 'Nước ngọt',
        promoNote: '',
        description: 'Vị dâu thơm ngọt giúp nạp nhanh năng lượng khi chạy deadline hoặc chiến game.',
        image: 'https://blog.aeoneshop.com/wp-content/uploads/2026/07/gia-sting-thumbnail.jpeg',
        fallback: 'https://placehold.co/600x400/DC2626/FAF7F2?text=Sting+Dau'
    }
];

// ============================================================
// 2. TRẠNG THÁI ỨNG DỤNG
// ============================================================
let currentFilter = 'all';
let currentMenuFilter = 'all';
let selectedBoxId = 'sleepbox';
let selectedMenuCart = {};
let currentModalMenuTab = 'food';
let currentLang = 'vi';
let toastTimeout = null;

// ============================================================
// 3. TỪ ĐIỂN SONG NGỮ (VI | EN)
// ============================================================
const TRANSLATIONS = {
    vi: {
        nav_about: 'Về chúng tôi',
        nav_branches: 'Chi nhánh',
        nav_member: 'Thành viên',
        nav_careers: 'Làm việc tại Relax Time',
        nav_book: 'Đặt chỗ trước',
        nav_book_short: 'Đặt chỗ',
        hero_subtitle: 'Cà phê & giải trí trong không gian của riêng bạn',
        hero_desc: 'Tận hưởng kỳ nghỉ ngắn gần nhà từ Sleepbox riêng tư, phòng chơi PS5 cực đã đến không gian hội nhóm Luxury với chi phí chỉ bằng một ly cà phê',
        hero_cta: 'Đặt không gian cho riêng bạn',
        hero_scroll: 'Xem các loại hình không gian',
        spaces_title: 'Các loại hình không gian tại Relax Time',
        spaces_desc: 'Dù bạn cần một góc nhỏ chợp mắt, trận game PS5 đỉnh cao hay không gian quây quần cùng hội bạn thân, chúng tôi đều có chiếc Box vừa vặn cho bạn.'
    },
    en: {
        nav_about: 'About Us',
        nav_branches: 'Branches',
        nav_member: 'Membership',
        nav_careers: 'Careers',
        nav_book: 'Book in Advance',
        nav_book_short: 'Book',
        hero_subtitle: 'Coffee & entertainment in your own private space',
        hero_desc: 'Enjoy a cozy staycation from private Sleepboxes and PS5 gaming rooms to Luxury group lounges for the price of a cup of coffee',
        hero_cta: 'Reserve Your Space',
        hero_scroll: 'Explore Our Spaces',
        spaces_title: 'Spaces at Relax Time',
        spaces_desc: 'Whether you need a quiet nap, an intense PS5 gaming session, or a spacious room to hang out with friends, we have the perfect Box for you.'
    }
};

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    const dict = TRANSLATIONS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    const viBtn = document.getElementById('lang-vi');
    const enBtn = document.getElementById('lang-en');
    if (viBtn && enBtn) {
        if (lang === 'vi') {
            viBtn.className = 'px-1.5 py-1 font-bold text-brand-navy hover:text-brand-brown transition-colors rounded';
            enBtn.className = 'px-1.5 py-1 text-gray-400 hover:text-brand-brown transition-colors rounded';
        } else {
            enBtn.className = 'px-1.5 py-1 font-bold text-brand-navy hover:text-brand-brown transition-colors rounded';
            viBtn.className = 'px-1.5 py-1 text-gray-400 hover:text-brand-brown transition-colors rounded';
        }
    }
}

// ============================================================
// 4. HÀM TIỆN ÍCH (ĐỊNH DẠNG TIỀN VND & TOAST)
// ============================================================
function formatVND(amount) {
    const num = Number(amount) || 0;
    return num.toLocaleString('vi-VN') + 'đ';
}

function showToast(message) {
    const toastBox = document.getElementById('toast-box');
    const toastMessage = document.getElementById('toast-message');
    if (!toastBox || !toastMessage) return;

    toastMessage.textContent = message;
    toastBox.classList.remove('hidden');

    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    toastTimeout = setTimeout(() => {
        toastBox.classList.add('hidden');
    }, 3800);
}

// ============================================================
// 5. HIỂN THỊ & LỌC CÁC LOẠI HÌNH KHÔNG GIAN BOX
// ============================================================
function renderSpaces(filterId = 'all') {
    const grid = document.getElementById('spaces-grid');
    if (!grid) return;

    const filtered = filterId === 'all'
        ? BOX_SPACES
        : BOX_SPACES.filter(space => space.id === filterId);

    grid.innerHTML = filtered.map(space => `
        <article class="bg-white rounded-3xl overflow-hidden border border-brand-sand shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div class="relative h-60 sm:h-64 overflow-hidden bg-brand-sand">
                <img
                    src="${space.image}"
                    alt="${space.name}"
                    referrerpolicy="no-referrer"
                    onerror="this.onerror=null; this.src='${space.fallback}';"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <span class="absolute top-4 left-4 ${(space.isWalkInFree || space.isWalkInOnly) ? 'bg-emerald-600 text-white' : 'bg-white/95 text-brand-navy'} backdrop-blur-xs text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                    ${space.badge}
                </span>
                <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <span class="inline-flex items-center gap-1.5 text-xs font-semibold bg-black/45 backdrop-blur-xs px-3 py-1.5 rounded-full">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        ${space.capacity}
                    </span>
                    ${space.isWalkInFree ? `
                        <div class="text-right">
                            <span class="text-xs opacity-90 block">Không giới hạn giờ</span>
                            <span class="text-lg font-extrabold text-emerald-300">Miễn phí</span>
                        </div>
                    ` : `
                        <div class="text-right">
                            <span class="text-xs opacity-90 block">${space.isWalkInOnly ? 'Không cần đặt trước' : 'Chỉ từ'}</span>
                            <span class="text-lg font-extrabold">${formatVND(space.pricePerHour)}<span class="text-xs font-normal">/giờ</span></span>
                        </div>
                    `}
                </div>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-brand-navy mb-1.5">${space.name}</h3>
                    <p class="text-sm text-brand-brown font-medium mb-3">${space.tagline}</p>
                    <p class="text-sm text-gray-600 leading-relaxed mb-5">${space.description}</p>

                    <ul class="space-y-1.5 mb-6">
                        ${space.amenities.slice(0, 3).map(item => `
                            <li class="flex items-center gap-2 text-xs sm:text-sm text-brand-navy/90">
                                <svg class="w-4 h-4 text-brand-brown shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 13l4 4L19 7"/></svg>
                                <span>${item}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="flex items-center gap-3 pt-4 border-t border-brand-sand/70">
                    <button type="button" onclick="openDetailModal('${space.id}')"
                        class="flex-1 py-2.5 px-4 rounded-xl border border-brand-sand hover:border-brand-brown text-brand-navy hover:text-brand-brown text-sm font-semibold transition-colors">
                        Xem chi tiết
                    </button>
                    ${space.isWalkInFree ? `
                        <a href="#menu" onclick="showToast('Phòng Chung Gối Lười hoàn toàn miễn phí & không cần đặt trước — chỉ cần mua nước tại quán!')"
                            class="flex-1 text-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-colors">
                            Vào trực tiếp • Menu
                        </a>
                    ` : (space.isWalkInOnly ? `
                        <a href="#branches" onclick="showToast('Khu vực Bida giá 59.000đ/giờ không cần đặt chỗ trước — mời bạn ghé trực tiếp chi nhánh để chơi ngay!')"
                            class="flex-1 text-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-colors">
                            Chơi trực tiếp • Chi nhánh
                        </a>
                    ` : `
                        <button type="button" onclick="openBookingModal('${space.id}')"
                            class="flex-1 py-2.5 px-4 rounded-xl bg-brand-brown hover:bg-brand-brownDark text-white text-sm font-semibold shadow-sm transition-colors">
                            Đặt box này
                        </button>
                    `)}
                </div>
            </div>
        </article>
    `).join('');
}

function filterSpaces(filterId) {
    currentFilter = filterId;
    renderSpaces(filterId);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-filter') === filterId;
        btn.className = isMatch
            ? 'filter-btn active px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-brand-brown text-white shadow-sm'
            : 'filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-white text-brand-navy border border-brand-sand hover:border-brand-brown';
    });
}

// ============================================================
// 5.5. HIỂN THỊ & LỌC THỰC ĐƠN ĐỒ ĂN, NƯỚC UỐNG
// ============================================================
function renderMenuSection(filterCat = 'all') {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    const filtered = filterCat === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === filterCat);

    grid.innerHTML = filtered.map(item => {
        const isBestSeller = item.badge === 'Best Seller';
        const badgeClass = isBestSeller
            ? 'bg-red-600 text-white'
            : (item.badge.includes('Luxury')
                ? 'bg-brand-navy text-white'
                : 'bg-white/95 text-brand-navy');

        let suggestedBox = null;
        if (item.id === 'combo-com-ga') suggestedBox = 'group4';
        else if (item.id === 'combo-ca-vien') suggestedBox = 'luxury';
        else if (item.category === 'drink-crafted' && item.price >= 35000) suggestedBox = 'sleepbox';

        return `
            <article class="bg-brand-cream/60 rounded-3xl overflow-hidden border border-brand-sand hover:shadow-lg transition-all duration-300 flex flex-col group">
                <div class="relative h-48 overflow-hidden bg-brand-sand">
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        onerror="this.onerror=null; this.src='${item.fallback}';"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span class="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm ${badgeClass}">
                        ${isBestSeller ? '★ Best Seller' : item.badge}
                    </span>
                    <span class="absolute bottom-3 right-3 bg-brand-navy/90 text-white text-sm font-extrabold px-3 py-1 rounded-xl shadow">
                        ${formatVND(item.price)}
                    </span>
                </div>
                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-lg font-bold text-brand-navy mb-1">${item.name}</h3>
                        ${item.promoNote ? `
                            <p class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg mb-2">
                                <span>🎁</span> ${item.promoNote}
                            </p>
                        ` : ''}
                        <p class="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">${item.description}</p>
                    </div>
                    <button type="button" onclick="openBookingWithMenuItem('${item.id}', ${suggestedBox ? `'${suggestedBox}'` : 'null'})"
                        class="w-full py-2.5 px-4 rounded-xl bg-white border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white text-xs sm:text-sm font-semibold transition-colors">
                        + Đặt phòng kèm món này
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

function filterMenu(filterCat) {
    currentMenuFilter = filterCat;
    renderMenuSection(filterCat);

    document.querySelectorAll('.menu-filter-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-menu-filter') === filterCat;
        btn.className = isMatch
            ? 'menu-filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-brand-brown text-white shadow-sm'
            : 'menu-filter-btn px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-brand-cream text-brand-navy border border-brand-sand hover:border-brand-brown';
    });
}

function openBookingWithMenuItem(itemId, suggestedBoxId = null) {
    selectedMenuCart = {};
    if (itemId) {
        selectedMenuCart[itemId] = 1;
    }
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (item) {
        currentModalMenuTab = item.category;
    }
    openBookingModal(suggestedBoxId || selectedBoxId, null, true);
}

// ============================================================
// 6. MODAL XEM CHI TIẾT PHÒNG
// ============================================================
function openDetailModal(boxId) {
    const space = BOX_SPACES.find(s => s.id === boxId);
    if (!space) return;

    const modal = document.getElementById('detail-modal');
    const img = document.getElementById('detail-img');
    img.src = space.image;
    img.alt = space.name;
    img.onerror = function () { this.onerror = null; this.src = space.fallback; };

    document.getElementById('detail-badge').textContent = `${space.badge} • ${space.capacity}`;
    document.getElementById('detail-title').textContent = space.name;
    document.getElementById('detail-price').textContent = space.isWalkInFree ? 'Miễn phí' : formatVND(space.pricePerHour);

    const priceUnitEl = document.getElementById('detail-price-unit');
    if (priceUnitEl) {
        priceUnitEl.textContent = space.isWalkInFree ? 'chỉ cần mua nước' : '/ giờ';
    }
    document.getElementById('detail-desc').textContent = space.description;

    document.getElementById('detail-amenities').innerHTML = space.amenities.map(item => `
        <li class="flex items-start gap-2">
            <svg class="w-4 h-4 text-brand-brown shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M5 13l4 4L19 7"/></svg>
            <span>${item}</span>
        </li>
    `).join('');

    const bookBtn = document.getElementById('detail-book-btn');
    if (space.isWalkInFree) {
        bookBtn.textContent = 'Không cần đặt trước • Xem thực đơn nước';
        bookBtn.className = 'w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-2xl shadow-md transition-colors';
        bookBtn.onclick = () => {
            closeDetailModal();
            const menuSection = document.getElementById('menu');
            if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
            showToast('Phòng Chung Gối Lười hoàn toàn miễn phí và không giới hạn thời gian — chỉ cần ghé quán mua nước nhé!');
        };
    } else if (space.isWalkInOnly) {
        bookBtn.textContent = 'Không cần đặt trước • Xem chi nhánh';
        bookBtn.className = 'w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-2xl shadow-md transition-colors';
        bookBtn.onclick = () => {
            closeDetailModal();
            const branchesSection = document.getElementById('branches');
            if (branchesSection) branchesSection.scrollIntoView({ behavior: 'smooth' });
            showToast('Khu vực Bida giá 59.000đ/giờ phục vụ chơi trực tiếp không cần đặt chỗ trước!');
        };
    } else {
        bookBtn.textContent = 'Đặt không gian này ngay';
        bookBtn.className = 'w-full bg-brand-brown hover:bg-brand-brownDark text-white font-semibold py-3.5 rounded-2xl shadow-md transition-colors';
        bookBtn.onclick = () => {
            closeDetailModal();
            openBookingModal(space.id);
        };
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// ============================================================
// 7. MODAL ĐẶT PHÒNG TRỰC TUYẾN
// ============================================================
function renderModalBoxSelector() {
    const container = document.getElementById('modal-box-selector');
    if (!container) return;

    const bookableSpaces = BOX_SPACES.filter(space => !space.isWalkInFree && !space.isWalkInOnly);

    container.innerHTML = bookableSpaces.map(space => {
        const isSelected = space.id === selectedBoxId;
        return `
            <button type="button" onclick="selectBookingBox('${space.id}')"
                class="p-3 rounded-2xl border text-left transition-all ${isSelected
                    ? 'border-brand-brown bg-brand-brown/10 ring-1 ring-brand-brown'
                    : 'border-brand-sand bg-white hover:border-brand-brown/50'}">
                <div class="text-xs font-bold ${isSelected ? 'text-brand-brown' : 'text-brand-navy'} truncate">${space.shortName}</div>
                <div class="text-[11px] text-gray-500 mt-0.5">${space.capacity}</div>
                <div class="text-xs font-bold text-brand-brown mt-1">${formatVND(space.pricePerHour)}/h</div>
            </button>
        `;
    }).join('');
}

function selectBookingBox(boxId) {
    selectedBoxId = boxId;
    const space = BOX_SPACES.find(s => s.id === boxId);
    if (space) {
        const guestInput = document.getElementById('book-guests');
        if (guestInput) {
            guestInput.value = space.defaultGuests;
            guestInput.max = space.maxGuests;
        }
    }
    renderModalBoxSelector();
    renderRoomComboBanner();
    renderModalMenuList();
    updateBookingSummary();
}

function setBookingDuration(hours) {
    const durationEl = document.getElementById('book-duration');
    if (durationEl) {
        durationEl.value = String(hours);
        updateBookingSummary();
        showToast('Đã chọn 3 giờ — Áp dụng giảm thêm 10% tiền phòng!');
    }
}

function switchModalMenuTab(tab) {
    currentModalMenuTab = tab;
    document.querySelectorAll('.modal-menu-tab').forEach(btn => {
        const isActive = btn.getAttribute('data-modal-tab') === tab;
        btn.className = isActive
            ? 'modal-menu-tab px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-brown text-white transition-colors'
            : 'modal-menu-tab px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-brand-navy border border-brand-sand hover:border-brand-brown transition-colors';
    });
    renderModalMenuList();
}

function updateMenuQty(itemId, delta) {
    const current = selectedMenuCart[itemId] || 0;
    const next = Math.max(0, current + delta);
    if (next === 0) {
        delete selectedMenuCart[itemId];
    } else {
        selectedMenuCart[itemId] = next;
    }
    renderRoomComboBanner();
    renderModalMenuList();
    updateBookingSummary();
}

function renderRoomComboBanner() {
    const banner = document.getElementById('room-combo-banner');
    if (!banner) return;

    const calc = calculateBookingTotals();

    if (selectedBoxId === 'sleepbox') {
        if (calc.hasRoomComboPromo) {
            banner.innerHTML = `<div class="text-xs text-emerald-700 font-semibold">✅ Đã áp dụng ưu đãi Phòng đơn: Thêm nước từ 35k giảm ngay 10%!</div>`;
        } else {
            banner.innerHTML = `
                <div class="text-xs text-brand-navy">
                    <span class="font-bold text-brand-brown">Ưu đãi Sleepbox:</span> Thêm nước từ <strong>35.000đ trở lên</strong> sẽ được <strong>giảm 10%</strong>!
                </div>
                <button type="button" onclick="updateMenuQty('ca-phe-sua', 1); switchModalMenuTab('drink-crafted')"
                    class="shrink-0 px-3 py-1.5 rounded-lg bg-brand-brown hover:bg-brand-brownDark text-white text-xs font-semibold transition-colors">
                    + Thêm Cà phê sữa (35k)
                </button>
            `;
        }
    } else if (selectedBoxId === 'group4') {
        if (calc.hasRoomComboPromo) {
            banner.innerHTML = `<div class="text-xs text-emerald-700 font-semibold">✅ Đã áp dụng ưu đãi Box 4 người: Kèm Combo Cơm gà 69k giảm ngay 10%!</div>`;
        } else {
            banner.innerHTML = `
                <div class="text-xs text-brand-navy">
                    <span class="font-bold text-brand-brown">Ưu đãi Box 4 người:</span> Thêm <strong>Combo Cơm gà chua ngọt (69k)</strong> sẽ được <strong>giảm 10%</strong>!
                </div>
                <button type="button" onclick="updateMenuQty('combo-com-ga', 1); switchModalMenuTab('food')"
                    class="shrink-0 px-3 py-1.5 rounded-lg bg-brand-brown hover:bg-brand-brownDark text-white text-xs font-semibold transition-colors">
                    + Thêm Cơm gà (69k)
                </button>
            `;
        }
    } else if (selectedBoxId === 'luxury') {
        if (calc.hasRoomComboPromo) {
            banner.innerHTML = `<div class="text-xs text-emerald-700 font-semibold">✅ Đã áp dụng ưu đãi Box Luxury: Kèm Combo Cá viên chiên 129k giảm ngay 20%!</div>`;
        } else {
            banner.innerHTML = `
                <div class="text-xs text-brand-navy">
                    <span class="font-bold text-brand-brown">Ưu đãi Box Luxury:</span> Thêm <strong>Combo Cá viên chiên thập cẩm (129k)</strong> sẽ được <strong>giảm 20%</strong>!
                </div>
                <button type="button" onclick="updateMenuQty('combo-ca-vien', 1); switchModalMenuTab('food')"
                    class="shrink-0 px-3 py-1.5 rounded-lg bg-brand-brown hover:bg-brand-brownDark text-white text-xs font-semibold transition-colors">
                    + Thêm Combo Cá viên (129k)
                </button>
            `;
        }
    } else if (selectedBoxId === 'karaoke2') {
        if (calc.hasRoomComboPromo) {
            banner.innerHTML = `<div class="text-xs text-emerald-700 font-semibold">✅ Đã áp dụng ưu đãi Karaoke Box 2 người: Thêm nước từ 35k giảm ngay 10%!</div>`;
        } else {
            banner.innerHTML = `
                <div class="text-xs text-brand-navy">
                    <span class="font-bold text-brand-brown">Ưu đãi Karaoke 2 người:</span> Thêm nước từ <strong>35.000đ trở lên</strong> sẽ được <strong>giảm 10%</strong> (cộng dồn giảm 10% khi đặt từ 3h)!
                </div>
                <button type="button" onclick="updateMenuQty('ca-phe-sua', 1); switchModalMenuTab('drink-crafted')"
                    class="shrink-0 px-3 py-1.5 rounded-lg bg-brand-brown hover:bg-brand-brownDark text-white text-xs font-semibold transition-colors">
                    + Thêm Cà phê sữa (35k)
                </button>
            `;
        }
    } else if (selectedBoxId === 'karaoke46') {
        if (calc.hasRoomComboPromo) {
            banner.innerHTML = `<div class="text-xs text-emerald-700 font-semibold">✅ Đã áp dụng ưu đãi Karaoke Box 4 - 6 người: Giảm ngay 10%!</div>`;
        } else {
            banner.innerHTML = `
                <div class="text-xs text-brand-navy">
                    <span class="font-bold text-brand-brown">Ưu đãi Karaoke 4-6 người:</span> Thêm <strong>Combo Cơm gà 69k</strong> hoặc <strong>nước từ 35k</strong> để <strong>giảm 10%</strong>!
                </div>
                <button type="button" onclick="updateMenuQty('combo-com-ga', 1); switchModalMenuTab('food')"
                    class="shrink-0 px-3 py-1.5 rounded-lg bg-brand-brown hover:bg-brand-brownDark text-white text-xs font-semibold transition-colors">
                    + Thêm Cơm gà (69k)
                </button>
            `;
        }
    } else if (selectedBoxId === 'netcouple') {
        banner.innerHTML = `
            <div class="text-xs text-brand-navy">
                <span class="font-bold text-brand-brown">Gợi ý Net Couple Sofa:</span> Gọi thêm <strong>Trà sữa nướng 49k</strong> hoặc đồ ăn nóng &amp; đặt từ <strong>3 giờ</strong> để <strong>giảm 10% tiền phòng</strong>!
            </div>
        `;
    } else {
        banner.innerHTML = `
            <div class="text-xs text-brand-navy">
                <span class="font-bold text-brand-brown">Gợi ý Box PS5:</span> Gọi thêm đồ ăn nhẹ (Cơm gà chua ngọt, Cá viên chiên) &amp; đặt từ <strong>3 giờ</strong> để được <strong>giảm 10% tiền phòng</strong>!
            </div>
        `;
    }
}

function renderModalMenuList() {
    const listEl = document.getElementById('modal-menu-list');
    if (!listEl) return;

    const items = MENU_ITEMS.filter(item => item.category === currentModalMenuTab);
    listEl.innerHTML = items.map(item => {
        const qty = selectedMenuCart[item.id] || 0;
        const isBestSeller = item.badge === 'Best Seller';
        return `
            <div class="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border ${qty > 0 ? 'border-brand-brown bg-brand-brown/5' : 'border-brand-sand'}">
                <div class="min-w-0">
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs font-bold text-brand-navy truncate">${item.name}</span>
                        ${isBestSeller ? '<span class="shrink-0 text-[10px] font-bold bg-red-100 text-red-600 px-1.5 py-0.5 rounded">Hot</span>' : ''}
                    </div>
                    <span class="text-xs font-semibold text-brand-brown">${formatVND(item.price)}</span>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    ${qty > 0 ? `
                        <button type="button" onclick="updateMenuQty('${item.id}', -1)"
                            class="w-6 h-6 rounded-lg border border-brand-sand bg-white hover:bg-brand-cream text-brand-navy font-bold text-xs flex items-center justify-center">−</button>
                        <span class="w-5 text-center text-xs font-bold text-brand-navy">${qty}</span>
                    ` : ''}
                    <button type="button" onclick="updateMenuQty('${item.id}', 1)"
                        class="w-6 h-6 rounded-lg bg-brand-brown hover:bg-brand-brownDark text-white font-bold text-xs flex items-center justify-center">+</button>
                </div>
            </div>
        `;
    }).join('');

    const totalItemsCount = Object.values(selectedMenuCart).reduce((sum, q) => sum + q, 0);
    const badgeEl = document.getElementById('modal-cart-badge');
    if (badgeEl) {
        if (totalItemsCount > 0) {
            badgeEl.textContent = `${totalItemsCount} món đã chọn`;
            badgeEl.classList.remove('hidden');
        } else {
            badgeEl.classList.add('hidden');
        }
    }
}

function calculateBookingTotals() {
    const space = BOX_SPACES.find(s => s.id === selectedBoxId) || BOX_SPACES[0];
    const duration = parseInt(document.getElementById('book-duration')?.value || '2', 10);
    const roomSubtotal = space.pricePerHour * duration;

    let foodSubtotal = 0;
    let drinkSubtotal = 0;
    let hasSingleDrink35k = false;
    const selectedItemsList = [];

    Object.entries(selectedMenuCart).forEach(([itemId, qty]) => {
        if (qty <= 0) return;
        const item = MENU_ITEMS.find(m => m.id === itemId);
        if (!item) return;
        const lineTotal = item.price * qty;
        foodSubtotal += lineTotal;
        selectedItemsList.push(`${item.name} x${qty}`);

        if (item.category === 'drink-crafted' || item.category === 'drink-soda') {
            drinkSubtotal += lineTotal;
            if (item.price >= 35000) hasSingleDrink35k = true;
        }
    });

    const hasTimePromo = duration >= 3;
    const timeDiscount = hasTimePromo ? Math.round(roomSubtotal * 0.1) : 0;

    let roomComboDiscountRate = 0;
    let roomComboLabel = '';

    if (selectedBoxId === 'sleepbox' && (hasSingleDrink35k || drinkSubtotal >= 35000)) {
        roomComboDiscountRate = 0.10;
        roomComboLabel = 'Ưu đãi Phòng đơn + Nước từ 35k (-10%)';
    } else if (selectedBoxId === 'karaoke2' && (hasSingleDrink35k || drinkSubtotal >= 35000)) {
        roomComboDiscountRate = 0.10;
        roomComboLabel = 'Ưu đãi Karaoke 2N + Nước từ 35k (-10%)';
    } else if (selectedBoxId === 'karaoke46' && ((selectedMenuCart['combo-com-ga'] || 0) > 0 || (selectedMenuCart['combo-ca-vien'] || 0) > 0 || hasSingleDrink35k || drinkSubtotal >= 35000)) {
        roomComboDiscountRate = 0.10;
        roomComboLabel = 'Ưu đãi Karaoke 4-6N đặt kèm món (-10%)';
    } else if (selectedBoxId === 'group4' && (selectedMenuCart['combo-com-ga'] || 0) > 0) {
        roomComboDiscountRate = 0.10;
        roomComboLabel = 'Ưu đãi Box 4 + Combo Cơm gà 69k (-10%)';
    } else if (selectedBoxId === 'luxury' && (selectedMenuCart['combo-ca-vien'] || 0) > 0) {
        roomComboDiscountRate = 0.20;
        roomComboLabel = 'Ưu đãi Box Luxury + Combo Cá viên 129k (-20%)';
    }

    const hasRoomComboPromo = roomComboDiscountRate > 0;
    const subtotalAfterTime = (roomSubtotal - timeDiscount) + foodSubtotal;
    const roomComboDiscount = hasRoomComboPromo ? Math.round(subtotalAfterTime * roomComboDiscountRate) : 0;

    const totalDiscount = timeDiscount + roomComboDiscount;
    const finalTotal = Math.max(0, roomSubtotal + foodSubtotal - totalDiscount);

    return {
        space,
        duration,
        roomSubtotal,
        foodSubtotal,
        hasTimePromo,
        timeDiscount,
        hasRoomComboPromo,
        roomComboLabel,
        roomComboDiscount,
        totalDiscount,
        finalTotal,
        selectedItemsList
    };
}

function updateBookingSummary() {
    const calc = calculateBookingTotals();

    document.getElementById('booking-summary-label').textContent = `${calc.space.name} • ${calc.duration} giờ`;
    document.getElementById('booking-room-subtotal').textContent = formatVND(calc.roomSubtotal);

    const durationHint = document.getElementById('duration-promo-hint');
    if (durationHint) {
        if (calc.hasTimePromo) {
            durationHint.classList.add('hidden');
        } else {
            durationHint.classList.remove('hidden');
        }
    }

    const foodRow = document.getElementById('summary-food-row');
    if (calc.foodSubtotal > 0) {
        foodRow.classList.remove('hidden');
        document.getElementById('summary-food-label').textContent = `Đồ ăn & nước (${calc.selectedItemsList.length} loại)`;
        document.getElementById('booking-food-subtotal').textContent = formatVND(calc.foodSubtotal);
    } else {
        foodRow.classList.add('hidden');
    }

    const timeRow = document.getElementById('summary-time-discount-row');
    if (calc.hasTimePromo) {
        timeRow.classList.remove('hidden');
        document.getElementById('booking-time-discount').textContent = `-${formatVND(calc.timeDiscount)}`;
    } else {
        timeRow.classList.add('hidden');
    }

    const comboRow = document.getElementById('summary-combo-discount-row');
    if (calc.hasRoomComboPromo) {
        comboRow.classList.remove('hidden');
        document.getElementById('summary-combo-discount-label').textContent = calc.roomComboLabel;
        document.getElementById('booking-combo-discount').textContent = `-${formatVND(calc.roomComboDiscount)}`;
    } else {
        comboRow.classList.add('hidden');
    }

    const savingsBadge = document.getElementById('booking-savings-badge');
    if (calc.totalDiscount > 0) {
        savingsBadge.textContent = `Tiết kiệm được ${formatVND(calc.totalDiscount)}`;
        savingsBadge.classList.remove('hidden');
    } else {
        savingsBadge.classList.add('hidden');
    }

    document.getElementById('booking-total-price').textContent = formatVND(calc.finalTotal);
}

function openBookingModal(preselectedBoxId = null, preselectedBranch = null, keepCart = false, preselectedDuration = null) {
    if (preselectedBoxId) {
        const targetSpace = BOX_SPACES.find(s => s.id === preselectedBoxId && !s.isWalkInFree && !s.isWalkInOnly);
        if (targetSpace) {
            selectedBoxId = targetSpace.id;
        }
    }
    if (preselectedBranch) {
        const branchSelect = document.getElementById('book-branch');
        if (branchSelect) branchSelect.value = preselectedBranch;
    }
    if (!keepCart) {
        selectedMenuCart = {};
    }
    if (preselectedDuration) {
        const durationEl = document.getElementById('book-duration');
        if (durationEl) durationEl.value = String(preselectedDuration);
    }

    const dateInput = document.getElementById('book-date');
    if (dateInput && !dateInput.value) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.value = `${yyyy}-${mm}-${dd}`;
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    document.getElementById('booking-form-container').classList.remove('hidden');
    document.getElementById('booking-success-container').classList.add('hidden');

    switchModalMenuTab(currentModalMenuTab);
    selectBookingBox(selectedBoxId);

    const modal = document.getElementById('booking-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

function resetBookingModal() {
    document.getElementById('booking-form').reset();
    selectedMenuCart = {};
    document.getElementById('booking-form-container').classList.remove('hidden');
    document.getElementById('booking-success-container').classList.add('hidden');
    selectBookingBox(selectedBoxId);
}

async function handleBookingSubmit(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('booking-submit-btn');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Xác nhận giữ chỗ';

    try {
        const calc = calculateBookingTotals();
        const branch = document.getElementById('book-branch').value;
        const guests = document.getElementById('book-guests').value;
        const date = document.getElementById('book-date').value;
        const time = document.getElementById('book-time').value;
        const customerName = document.getElementById('book-name').value.trim();
        const customerPhone = document.getElementById('book-phone').value.trim();
        const note = document.getElementById('book-note').value.trim();

        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        const bookingCode = `RT-${randomDigits}`;

        const appliedPromos = [];
        if (calc.hasTimePromo) appliedPromos.push('Đặt từ 3h trở lên giảm 10%');
        if (calc.hasRoomComboPromo) appliedPromos.push(calc.roomComboLabel);

        const bookingPayload = {
            bookingCode,
            customerName,
            customerPhone,
            branch,
            boxName: calc.space.name,
            guests,
            date,
            time,
            duration: calc.duration,
            menuItems: calc.selectedItemsList.length > 0 ? calc.selectedItemsList.join(', ') : 'Không gọi kèm',
            promos: appliedPromos.length > 0 ? appliedPromos.join(' + ') : 'Không có',
            roomSubtotal: calc.roomSubtotal,
            foodSubtotal: calc.foodSubtotal,
            totalDiscount: calc.totalDiscount,
            finalTotal: calc.finalTotal,
            note
        };

        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.trim() !== '') {
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Đang gửi thông tin đặt phòng...';
            }

            await fetch(GOOGLE_SCRIPT_URL.trim(), {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(bookingPayload)
            });
        }

        document.getElementById('success-code').textContent = bookingCode;
        document.getElementById('success-box').textContent = calc.space.name;
        document.getElementById('success-branch').textContent = branch;
        document.getElementById('success-time').textContent = `${time} (${calc.duration}h) • ${date}`;
        document.getElementById('success-total').textContent = formatVND(calc.finalTotal);

        const successFoodRow = document.getElementById('success-food-row');
        if (calc.selectedItemsList.length > 0) {
            successFoodRow.classList.remove('hidden');
            document.getElementById('success-food').textContent = calc.selectedItemsList.join(', ');
        } else {
            successFoodRow.classList.add('hidden');
        }

        const successPromoRow = document.getElementById('success-promo-row');
        if (appliedPromos.length > 0) {
            successPromoRow.classList.remove('hidden');
            document.getElementById('success-promo').textContent = `${appliedPromos.join(' + ')} (Tiết kiệm ${formatVND(calc.totalDiscount)})`;
        } else {
            successPromoRow.classList.add('hidden');
        }

        document.getElementById('booking-form-container').classList.add('hidden');
        document.getElementById('booking-success-container').classList.remove('hidden');

        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.trim() !== '') {
            showToast('Đã ghi nhận đơn đặt phòng vào hệ thống!');
        }
    } catch (err) {
        console.error('Lỗi khi xác nhận đặt phòng:', err);
        showToast('Có lỗi khi gửi thông tin, vui lòng kiểm tra kết nối mạng và thử lại!');
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    }
}

function copyBookingCode() {
    const code = document.getElementById('success-code')?.textContent || '';
    if (!code) return;

    const tempInput = document.createElement('textarea');
    tempInput.value = code;
    tempInput.style.position = 'fixed';
    tempInput.style.opacity = '0';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
        document.execCommand('copy');
        showToast(`Đã sao chép mã đặt chỗ: ${code}`);
    } catch (err) {
        showToast(`Mã đặt chỗ của bạn là: ${code}`);
    }
    document.body.removeChild(tempInput);
}

// ============================================================
// 8. ĐIỀU KHIỂN MENU MOBILE, HIỆU ỨNG CUỘN HEADER & KHỞI TẠO
// ============================================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');

    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
        menu.classList.remove('hidden');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    menu.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const curve = document.getElementById('header-curve');
    if (!header || !curve) return;

    if (window.scrollY > 120) {
        curve.classList.add('opacity-0');
        header.firstElementChild.classList.add('shadow-md');
    } else {
        curve.classList.remove('opacity-0');
        header.firstElementChild.classList.remove('shadow-md');
    }
});

document.getElementById('detail-modal').addEventListener('click', (e) => {
    if (e.target.id === 'detail-modal') closeDetailModal();
});

document.getElementById('booking-modal').addEventListener('click', (e) => {
    if (e.target.id === 'booking-modal') closeBookingModal();
});

document.addEventListener('DOMContentLoaded', () => {
    renderSpaces('all');
    renderMenuSection('all');
});