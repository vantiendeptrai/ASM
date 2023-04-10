import { Footer } from "antd/es/layout/layout"

export const FooterClient = () => {
    return (
        <Footer>
            <div className="text-[#444444] font-normal text-[12px] leading-[22px] flex justify-center gap-20">
                <div>
                    <h4 className="text-[18px] mt-3">Tìm cửa hàng</h4>
                    <p>Tìm cửa hàng gần nhất</p>
                    <p>Mua hàng từ xa</p>
                    <p className="text-[#FF0000]">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
                    <p className="text-[16px] mt-3">Phương thức thanh toán</p>

                    <div className="grid grid-cols-4">
                        <img src="http://localhost:5173/image/citi.png" className="w-[30px] h-[20px]" alt="" />
                        <img src="http://localhost:5173/image/moca.png" className="w-[30px] h-[20px]" alt="" />
                        <img src="http://localhost:5173/image/rediva.png" className="w-[30px] h-[20px]" alt="" />
                        <img src="http://localhost:5173/image/vnpay.png" className="w-[30px] h-[20px]" alt="" />
                        <img src="http://localhost:5173/image/vpbank.png" className="w-[30px] h-[20px]" alt="" />
                    </div>
                </div>

                <div>
                    <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
                    <p>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
                    <p>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
                    <h4 className="text-[16px] mt-3">Đối tác dịch vụ bảo hành</h4>
                    <p>Điện Thoại - Máy tính</p>
                    <p className="text-[16px] mb-1 mt-2">Trung tâm bảo hành uỷ quyền Apple</p>
                    <img src="http://localhost:5173/image/dienthoaivui.png" className="w-[216px] h-[40px]" alt="" />
                </div>

                <div>
                    <p>Mua hàng và thanh toán Online</p>
                    <p>Mua hàng trả góp Online</p>
                    <p>Tra thông tin đơn hàng</p>
                    <p>Tra điểm Smember</p>
                    <p>Tra thông tin bảo hành</p>
                    <p className="text-[#000000]">Tra cứu hoá đơn VAT điện tử</p>
                    <p>Trung tâm bảo hành chính hãng</p>
                    <p>Quy định về việc sao lưu dữ liệu</p>
                    <p className="text-[#D70018]">Dịch vụ bảo hành điện thoại</p>
                </div>

                <div>
                    <p>Quy chế hoạt động</p>
                    <p>Chính sách Bảo hành</p>
                    <p>Liên hệ hợp tác kinh doanh</p>
                    <p>Khách hàng doanh nghiệp (B2B)</p>
                    <p className="text-[#D70018]">Ưu đãi thanh toán</p>
                    <p>Tuyển dụng</p>
                </div>
            </div>

            <div className="mt-10 font-normal text-[10px] leading-[20px] text-[#444444] bg-white h-[168px]">
                <div className="flex gap-[150px] justify-center">
                    <div className="mt-5">
                        <p>Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11</p>
                        <p>Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</p>
                        <p>iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</p>
                    </div>

                    <div className="mt-5">
                        <p>Điện thoại iPhone - Điện thoại Samsung  - Điện thoại Samsung A</p>
                        <p>Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia</p>
                        <p>Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53</p>
                    </div>

                    <div className="mt-5">
                        <p>Laptop - Laptop HP - Laptop Dell - Laptop Acer</p>
                        <p>Microsoft Surface - Laptop Lenovo - Laptop Asus</p>
                        <p>Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình</p>
                    </div>
                </div>

                <div className="text-[#00000080] flex justify-center mt-6">
                    <p>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
                </div>
            </div>
        </Footer>
    )
}