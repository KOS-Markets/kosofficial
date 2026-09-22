import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const overrides = {
  ja: {
    login: 'ログイン', trade: '取引', futures: '先物', cryptoCFDs: '暗号資産CFD', shares: '株式',
    carouselTitle: '次世代', carouselTitleAccent: '取引', advantagesTag: 'トレーダーを知る',
    homeboxSentence12: '最大1:2000のレバレッジ', platformsMT4Sentence8: 'デスクトップ', platformsMT4Sentence11: 'モバイル', platformsMT4Sentence14: 'ウェブ',
    accountSentence14: 'ボーナス', leverage: 'レバレッジ', ask: '買値', bid: '売値', spread: 'スプレッド', contractSize: '契約サイズ',
    forexTextBox: 'スプレッド', forexTextBox2: 'スワップ', energyText1Box4: 'ヘッジとレバレッジ', whyBox3Sentence2: 'グローバルな展開',
    energyViewTitle: 'エネルギーCFD取引', energyText1Box2: '週5日、1日23時間取引', metalsText1Box4: '市場インサイト', metalsTextBox2: '現物金', metalsTextBox4: '現物銀',
    energyBoxSentence2: 'エネルギーCFD', metalsViewTitle: '貴金属', cryptoBoxSentence2: '暗号資産', legalDocumentsBoxSentence5: 'マージンコール',
    partnershipBox1Sentence2: 'Introducing Broker', announcementTradingHoursInstrument: '銘柄', announcementTradingHoursInstruments: '銘柄',
    announcementTradingHoursSession: 'セッション', announcementTradingHoursSessions: 'セッション', announcementTradingHoursFooterExample: 'HH:MM 変更済み',
    announcementDividendEntries: '件', worldCup2026: 'ワールドカップ2026', worldCup2026CodePopupHeadline: 'ラッキースピン',
  },
  ms: {
    login: 'Log Masuk', trade: 'Dagangan', futures: 'Niaga Hadapan', cryptoCFDs: 'CFD Kripto', shares: 'Saham',
    carouselTitle: 'Generasi Seterusnya', carouselTitleAccent: 'Dagangan', advantagesTag: 'KENALI PEDAGANG ANDA',
    homeboxSentence12: 'Leveraj sehingga 1:2000', platformsMT4Sentence8: 'Desktop', platformsMT4Sentence11: 'Mudah Alih', platformsMT4Sentence14: 'Web',
    accountSentence14: 'Bonus', leverage: 'Leveraj', ask: 'Harga Jual', bid: 'Harga Beli', spread: 'Spread', contractSize: 'Saiz Kontrak',
    forexTextBox: 'Spread', forexTextBox2: 'Swap', energyText1Box4: 'Lindung Nilai & Leveraj', whyBox3Sentence2: 'Jangkauan Global',
    energyViewTitle: 'Dagangan CFD Tenaga', energyText1Box2: 'Dagangan 23/5', metalsText1Box4: 'Pandangan Pasaran', metalsTextBox2: 'Emas Spot', metalsTextBox4: 'Perak Spot',
    energyBoxSentence2: 'CFD Tenaga', metalsViewTitle: 'Logam Berharga', cryptoBoxSentence2: 'Kripto', legalDocumentsBoxSentence5: 'Panggilan Margin',
    partnershipBox1Sentence2: 'Broker Pengenalan', announcementTradingHoursInstrument: 'instrumen', announcementTradingHoursInstruments: 'instrumen',
    announcementTradingHoursSession: 'sesi', announcementTradingHoursSessions: 'sesi', announcementTradingHoursFooterExample: 'HH:MM Diubah',
    announcementDividendEntries: 'Entri', worldCup2026: 'Piala Dunia 2026', worldCup2026CodePopupHeadline: 'Pusingan Bertuah',
  },
  ko: {
    login: '로그인', trade: '거래', futures: '선물', cryptoCFDs: '암호화폐 CFD', shares: '주식',
    carouselTitle: '차세대', carouselTitleAccent: '트레이딩', advantagesTag: '트레이더를 만나보세요',
    homeboxSentence12: '최대 1:2000 레버리지', platformsMT4Sentence8: '데스크톱', platformsMT4Sentence11: '모바일', platformsMT4Sentence14: '웹',
    accountSentence14: '보너스', leverage: '레버리지', ask: '매도호가', bid: '매수호가', spread: '스프레드', contractSize: '계약 규모',
    forexTextBox: '스프레드', forexTextBox2: '스왑', energyText1Box4: '헤지 및 레버리지', whyBox3Sentence2: '글로벌 진출',
    energyViewTitle: '에너지 CFD 거래', energyText1Box2: '주 5일, 하루 23시간 거래', metalsText1Box4: '시장 인사이트', metalsTextBox2: '현물 금', metalsTextBox4: '현물 은',
    energyBoxSentence2: '에너지 CFD', metalsViewTitle: '귀금속', cryptoBoxSentence2: '암호화폐', legalDocumentsBoxSentence5: '마진콜',
    partnershipBox1Sentence2: '소개 브로커', announcementTradingHoursInstrument: '상품', announcementTradingHoursInstruments: '상품',
    announcementTradingHoursSession: '세션', announcementTradingHoursSessions: '세션', announcementTradingHoursFooterExample: 'HH:MM 수정됨',
    announcementDividendEntries: '항목', worldCup2026: '월드컵 2026', worldCup2026CodePopupHeadline: '럭키 스핀',
  },
  id: {
    login: 'Masuk', trade: 'Perdagangan', futures: 'Berjangka', cryptoCFDs: 'CFD Kripto', shares: 'Saham',
    carouselTitle: 'Generasi Berikutnya', carouselTitleAccent: 'Perdagangan', advantagesTag: 'KENALI TRADER ANDA',
    homeboxSentence12: 'Leverage hingga 1:2000', platformsMT4Sentence8: 'Desktop', platformsMT4Sentence11: 'Seluler', platformsMT4Sentence14: 'Web',
    accountSentence14: 'Bonus', leverage: 'Leverage', ask: 'Harga Ask', bid: 'Harga Bid', spread: 'Spread', contractSize: 'Ukuran Kontrak',
    forexTextBox: 'Spread', forexTextBox2: 'Swap', energyText1Box4: 'Lindung Nilai & Leverage', whyBox3Sentence2: 'Jangkauan Global',
    energyViewTitle: 'Trading CFD Energi', energyText1Box2: 'Trading 23/5', metalsText1Box4: 'Wawasan Pasar', metalsTextBox2: 'Emas Spot', metalsTextBox4: 'Perak Spot',
    energyBoxSentence2: 'CFD Energi', metalsViewTitle: 'Logam Mulia', cryptoBoxSentence2: 'Kripto', legalDocumentsBoxSentence5: 'Margin Call',
    partnershipBox1Sentence2: 'Introducing Broker', announcementTradingHoursInstrument: 'instrumen', announcementTradingHoursInstruments: 'instrumen',
    announcementTradingHoursSession: 'sesi', announcementTradingHoursSessions: 'sesi', announcementTradingHoursFooterExample: 'HH:MM Diubah',
    announcementDividendEntries: 'Entri', worldCup2026: 'Piala Dunia 2026', worldCup2026CodePopupHeadline: 'Putaran Beruntung',
  },
  th: {
    login: 'เข้าสู่ระบบ', trade: 'การซื้อขาย', futures: 'ฟิวเจอร์ส', cryptoCFDs: 'คริปโต CFD', shares: 'หุ้น',
    carouselTitle: 'ยุคใหม่', carouselTitleAccent: 'การซื้อขาย', advantagesTag: 'พบกับเทรดเดอร์ของคุณ',
    homeboxSentence12: 'เลเวอเรจสูงสุด 1:2000', platformsMT4Sentence8: 'เดสก์ท็อป', platformsMT4Sentence11: 'มือถือ', platformsMT4Sentence14: 'เว็บ',
    accountSentence14: 'โบนัส', leverage: 'เลเวอเรจ', ask: 'ราคาเสนอขาย', bid: 'ราคาเสนอซื้อ', spread: 'สเปรด', contractSize: 'ขนาดสัญญา',
    forexTextBox: 'สเปรด', forexTextBox2: 'สวอป', energyText1Box4: 'เฮดจิ้งและเลเวอเรจ', whyBox3Sentence2: 'การเข้าถึงทั่วโลก',
    energyViewTitle: 'ซื้อขาย CFD พลังงาน', energyText1Box2: 'ซื้อขาย 23/5', metalsText1Box4: 'ข้อมูลเชิงลึกของตลาด', metalsTextBox2: 'ทองคำสปอต', metalsTextBox4: 'เงินสปอต',
    energyBoxSentence2: 'พลังงาน CFD', metalsViewTitle: 'โลหะมีค่า', cryptoBoxSentence2: 'คริปโต', legalDocumentsBoxSentence5: 'มาร์จิ้นคอล',
    partnershipBox1Sentence2: 'โบรกเกอร์แนะนำ', announcementTradingHoursInstrument: 'ตราสาร', announcementTradingHoursInstruments: 'ตราสาร',
    announcementTradingHoursSession: 'ช่วงเวลา', announcementTradingHoursSessions: 'ช่วงเวลา', announcementTradingHoursFooterExample: 'HH:MM แก้ไขแล้ว',
    announcementDividendEntries: 'รายการ', worldCup2026: 'ฟุตบอลโลก 2026', worldCup2026CodePopupHeadline: 'วงล้อนำโชค',
  },
  vi: {
    login: 'Đăng nhập', trade: 'Giao dịch', futures: 'Hợp đồng tương lai', cryptoCFDs: 'CFD tiền điện tử', shares: 'Cổ phiếu',
    carouselTitle: 'Thế hệ mới', carouselTitleAccent: 'Giao dịch', advantagesTag: 'GẶP GỠ NHÀ GIAO DỊCH CỦA BẠN',
    homeboxSentence12: 'Đòn bẩy lên tới 1:2000', platformsMT4Sentence8: 'Máy tính', platformsMT4Sentence11: 'Di động', platformsMT4Sentence14: 'Web',
    accountSentence14: 'Thưởng', leverage: 'Đòn bẩy', ask: 'Giá Ask', bid: 'Giá Bid', spread: 'Chênh lệch', contractSize: 'Quy mô hợp đồng',
    forexTextBox: 'Chênh lệch', forexTextBox2: 'Hoán đổi', energyText1Box4: 'Phòng hộ & Đòn bẩy', whyBox3Sentence2: 'Phạm vi toàn cầu',
    energyViewTitle: 'Giao dịch CFD năng lượng', energyText1Box2: 'Giao dịch 23/5', metalsText1Box4: 'Thông tin thị trường', metalsTextBox2: 'Vàng giao ngay', metalsTextBox4: 'Bạc giao ngay',
    energyBoxSentence2: 'CFD năng lượng', metalsViewTitle: 'Kim loại quý', cryptoBoxSentence2: 'Tiền điện tử', legalDocumentsBoxSentence5: 'Gọi ký quỹ',
    partnershipBox1Sentence2: 'Nhà môi giới giới thiệu', announcementTradingHoursInstrument: 'sản phẩm', announcementTradingHoursInstruments: 'sản phẩm',
    announcementTradingHoursSession: 'phiên', announcementTradingHoursSessions: 'phiên', announcementTradingHoursFooterExample: 'HH:MM Đã chỉnh sửa',
    announcementDividendEntries: 'Mục', worldCup2026: 'World Cup 2026', worldCup2026CodePopupHeadline: 'Vòng quay may mắn',
  },
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

for (const [code, values] of Object.entries(overrides)) {
  const file = path.join(root, `src/language/lang/${code}.ts`)
  let source = fs.readFileSync(file, 'utf8')
  for (const [key, value] of Object.entries(values)) {
    const pattern = new RegExp(`^(\\s*${escapeRegExp(JSON.stringify(key))}:\\s*).*,$`, 'm')
    if (!pattern.test(source)) throw new Error(`Missing ${code}.${key}`)
    source = source.replace(pattern, `$1${JSON.stringify(value)},`)
  }
  fs.writeFileSync(file, source, 'utf8')
}
