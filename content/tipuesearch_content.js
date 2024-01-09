var tipuesearch = {"pages": [{'title': 'bout', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'bout.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n", 'tags': '', 'url': 'Brython.html'}, {'title': '作業內容', 'text': '', 'tags': '', 'url': '作業內容.html'}, {'title': 'W3', 'text': '利用已經帶有 Brython 執行環境的倉儲, 在設定學員 Github Classroom 首次作業時, 即經由 template 置入, 因此學員只要: \n 利用學校 email 帳號, 建立 Github 帳號, 以英文姓名縮寫加上一組數字, 選擇最短帳號名稱 例如: jfk40723199, jfk 為其自選的姓名縮寫, 而隨後則加上各自的學號. \n 擁有 Github 帳號後, 即可透過 Github Classroom assignment 連結取得作業倉儲, 自行在倉儲中設定 Github Pages 後, 即可啟用作業網站 (以下 \xa0 所謂 網站均指靜態網站 \xa0 , 而用來編輯網站內容的 動態網站, 則統稱為網際內容編輯器 , 使用動態網站的目的在編輯靜態網站的內容). 網站內容經過編輯之後, 必須建立新的網站內容 (使用 generate_pages), 然後將新的網站內容更新到對應的 Github 倉儲中 (稱為改版, 其過程經歷 git add, git commit 與 git push 等階段). \n git 為分散式版次管理系統工具. \n git add \n git commit \n git push \n 採用 Github Classroom 建立作業倉儲的問題: \n 2023/09/26 在 1a w3 課程進行到建立各學員 site 作業時發現, 將 Replit 導入 Github 倉儲的流程中, 所產生的系統間權限設定, 必須由 Github Classroom 管理帳號 (以 cp2023 為例, 附屬在 mdecp2023 帳號下), 針對各用戶所提出的個別 Replit 權限 requests (以 site-scrum-1 倉儲為例, 只能透過 Replit 提出控管 mdecp2023/site-scrum-1 倉儲的權限) \xa0 逐一進行設定 . \n \n (上圖顯示共有三名用戶針對 mdecp2023 帳號下的 Github Classroom 倉儲提出 Replit 連線要求, 其中只有最上方用戶的 request 取得 mdecp2023/site-scrum-1 倉儲的維護權限, 其餘兩則 requests 則仍處於待審核階段. 意即若要讓各用戶整合 Replit, \xa0 每一個 Github Classroom 作業, 管理者都必須手動處理超過兩百則的 requests ) \n 為去除管理者的手動設定負擔, 決定 2023 cp 與 cad 等課程將放棄使用 Github Classroom. 改為由各學員自行針對課程建立用來評分的課程倉儲與網站 (cp 課程建立 cp2023 倉儲, cad 課程則建立 cad2023 倉儲), 直接附屬在學員的 Github 帳號下, 後續的 submodule 設定與倉儲協同權限則統一由各學員自行負責 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '各學員自行建立線上考試帳號 \n 依據 \xa0 112 學年度第一學期教師授課表 中的學員修課名單, 利用 Teams 中的 Excel 取學員 Github 帳號. \n 各學員自行建立 Github 評分倉儲 cp2023, 並設定 Github Pages \n 登入 Github 後, 以\xa0 https://github.com/mdecycu/cmsite \xa0作為 Template 建立 cp2023 倉儲 \n 在 Replit IDE 上啟動 cp2023 內容編輯網站, 並將改版內容推送至 Github \n 在同時登入 Github 與 Replit 的情況下, 將 Replit 帳號 connect 至 Github 帳號 \n 利用 import 將 cp2023 倉儲導入 Replit \n 設定 .replit 為 python3 main.py \n 根據 cp2023 倉儲中的 README.md 在 Shell 區執行 git submodule 與 pip install \n 以 Run 執行 main.py 啟動倉儲內容編輯網頁 \n 利用 密碼產生程式 將所選定的管理者密碼字串存入 Tool - Secrets 頁面中的 config 變數 (若無 config 環境變數設定, 動態網站登入管理者密碼將交由倉儲中的 config/config 字串進行驗證) \n 重新啟倉儲內容編輯網頁後, 以新管理者密碼登入後改版並 Convert 為靜態內容後, 在 Git 頁面中將改版內容推至 Github \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n}\n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'ROC', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n} \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'ROC.html'}, {'title': 'USA', 'text': '\n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n', 'tags': '', 'url': 'USA.html'}, {'title': 'Japan', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n\n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n\n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n\n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n\n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n}\n \n \n', 'tags': '', 'url': 'Japan.html'}, {'title': 'W7', 'text': 'Map: site map 網站所有頁面 \n EditA: edit all pages, 使用時機為(1)解決多人共用網站時的衝突, 或(2)刪除特定頁面 \n Edit: edit one page, 先選頁面, 再選 Edit 然後才能進入編輯模式 \n Config: 編輯網站標題, 若要編輯 site title, 必須更改 init.py 中的 site_title 字串內容 \n Search: 頁面資料 html 原始碼內容搜尋 \n IUpload: image upload, 影像檔案上傳, 資料會放入 images 目錄中 \n IList: image file list, 列出存在 images 目錄下的影像檔案 \n FUpload: file upload, 一般檔案上傳功能, 資料會放入 downloads 目錄中 \n FList: file list, 列出位於 downloads 目錄下的檔案 \n Logout: 登出 \n Convert: 將 config/content.htm 經過分頁程式處理後, 轉為 content 目錄下的超文件 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '線上簡報、網誌與多媒體影片製作工具: \n Leo Editor \xa0 ( 討論群組 ) 為大綱管理系統, 可以當作程式開發的 IDE (Integrated Development Environment) 使用, 可用來編輯 reveal.js 簡報檔案中的 html 與 markdown, 也可用來編輯 Pelican 網誌 markdown 與轉檔, 並且在電腦輔助設計與分析過程中, 可以用來解讀 CoppeliaSim XML 格式檔案. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n Wink \xa0 為操作流程影片製作套件, 可以在電腦操作過程, 儲存關鍵頁面與滑鼠點擊區域後, 加上輔助文字說明後製作成 mp4 影片檔. \n ShareX \xa0 為螢幕畫面取像或錄影套件, 可以擷取電腦畫面任一區域存為影像檔, 或者結合語音說明與滑鼠操作錄製說明影片. \n OBS \xa0 為電腦廣播製作系統, 可以結合各種語音、圖像與影片製作出多元的電腦操作說明影片. \n Wink 與 ShareX 都需要 \xa0 ffmpeq.exe . \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W13', 'text': '一開始學習計算機程式這門課程時，我感到非常困惑，因為我對C語言一無所知。老師的講課速度很快，而我自己的學習反應較慢，因此需要花更多的時間來理解課堂內容。特別是初次接觸Replit與GitHub時，我感到有些迷失，不知道如何進一步進行課程。 \n 然而，透過多次觀看老師的教學影片、向同組同學和其他組的同學請教，我終於成功地設定了Replit和GitHub帳號，並完成了老師指定的作業。這個過程讓我對程式語言有了更深入的認識，並且漸漸克服了一開始的困難。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'ANSIC', 'text': '', 'tags': '', 'url': 'ANSIC.html'}, {'title': 'C1.', 'text': '#include <stdio.h> \n int main() { // Print Name printf("Name :謝承祐\\n"); // Print Date of Birth printf("DOB : December 29, 2004\\n"); \n // Print Mobile Number printf("Mobile : 09-58730523\\n"); \n // Indicate successful execution return(0); } \n \n', 'tags': '', 'url': 'C1..html'}, {'title': 'C2.', 'text': '#include <stdio.h> \n int main(int argc, char** argv) {  // Check for C standard version  #if __STDC_VERSION__ >= 201710L  printf("We are using C18!\\n");  #elif __STDC_VERSION__ >= 201112L  printf("We are using C11!\\n");  #elif __STDC_VERSION__ >= 199901L  printf("We are using C99!\\n");  #else  printf("We are using C89/C90!\\n");  #endif \n // Indicate successful execution  return 0; } \n \n', 'tags': '', 'url': 'C2..html'}, {'title': 'C3.', 'text': '#include <stdio.h> \n int main()  {  // Print a line of hashes  printf("######\\n"); \n // Print a single hash  printf("#\\n"); \n // Print a single hash  printf("#\\n"); \n // Print a line of hashes  printf("#####\\n"); \n // Print a single hash  printf("#\\n"); \n // Print a single hash  printf("#\\n"); \n // Print a single hash  printf("#\\n"); \n return(0); } \n \n', 'tags': '', 'url': 'C3..html'}, {'title': 'C4.', 'text': '#include <stdio.h> \n \xa0 \n int   main()  \n { \n \xa0\xa0\xa0\xa0 // Declare and initialize character variables \n \xa0\xa0\xa0\xa0 char   char1 =  \'X\' ; \n \xa0\xa0\xa0\xa0 char   char2 =  \'M\' ; \n \xa0\xa0\xa0\xa0 char   char3 =  \'L\' ; \n \xa0 \n \xa0\xa0\xa0\xa0 // Print the original and reversed characters \n \xa0\xa0\xa0\xa0 printf ( "The reverse of %c%c%c is %c%c%c\\n" , \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 char1, char2, char3, \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 char3, char2, char1); \n \xa0 \n \xa0\xa0\xa0\xa0 return (0); \n } \n \n', 'tags': '', 'url': 'C4..html'}, {'title': 'C5.', 'text': '#include <stdio.h>  \n \xa0 \n /*  \n \xa0\xa0\xa0 Variables to store the width and height of a rectangle in inches  \n */ \n int   width;\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  \n int   height;\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  \n \xa0 \n int   area;\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  /* Variable to store the area of the rectangle */ \n int   perimeter;\xa0\xa0\xa0\xa0\xa0  /* Variable to store the perimeter of the rectangle */ \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 /* Assigning values to height and width */ \n \xa0\xa0\xa0\xa0 height = 7; \n \xa0\xa0\xa0\xa0 width = 5; \n \xa0 \n \xa0\xa0\xa0\xa0 /* Calculating the perimeter of the rectangle */ \n \xa0\xa0\xa0\xa0 perimeter = 2*(height + width); \n \xa0\xa0\xa0\xa0 printf ( "Perimeter of the rectangle = %d inches\\n" , perimeter); \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 /* Calculating the area of the rectangle */ \n \xa0\xa0\xa0\xa0 area = height * width; \n \xa0\xa0\xa0\xa0 printf ( "Area of the rectangle = %d square inches\\n" , area); \n \xa0 \n \xa0\xa0\xa0\xa0 return (0); \n } \n \n', 'tags': '', 'url': 'C5..html'}, {'title': 'C6.', 'text': '#include <stdio.h> \n \xa0 \n int   main() { \n \xa0\xa0\xa0 int   radius;\xa0\xa0\xa0\xa0\xa0  /* Variable to store the radius of the circle */ \n \xa0\xa0\xa0 float   area, perimeter;\xa0\xa0\xa0  /* Variables to store the area and perimeter of the circle */ \n \xa0\xa0\xa0 radius = 6;\xa0\xa0\xa0\xa0\xa0  /* Assigning a value to the radius */ \n \xa0 \n \xa0\xa0\xa0 /* Calculating the perimeter of the circle */ \n \xa0\xa0\xa0 perimeter = 2 * 3.14 * radius; \n \xa0\xa0\xa0 printf ( "Perimeter of the Circle = %f inches\\n" , perimeter); \n \xa0 \n \xa0\xa0\xa0 /* Calculating the area of the circle */ \n \xa0\xa0\xa0 area = 3.14 * radius * radius; \n \xa0\xa0\xa0 printf ( "Area of the Circle = %f square inches\\n" , area); \n \xa0 \n \xa0\xa0\xa0 return (0); \n } \n \n', 'tags': '', 'url': 'C6..html'}, {'title': 'C7.', 'text': '#include <stdio.h> \n \xa0 \n int   main() \n { \n \xa0\xa0\xa0\xa0 int   days, years, weeks; \n \xa0 \n \xa0\xa0\xa0\xa0 days = 1329;  // Total number of days \n \xa0 \n \xa0\xa0\xa0\xa0 // Converts days to years, weeks and days \n \xa0\xa0\xa0\xa0 years = days/365;  // Calculate years \n \xa0\xa0\xa0\xa0 weeks = (days % 365)/7;  // Calculate weeks \n \xa0\xa0\xa0\xa0 days = days - ((years*365) + (weeks*7));  // Calculate remaining days \n \xa0 \n \xa0\xa0\xa0\xa0 // Print the results \n \xa0\xa0\xa0\xa0 printf ( "Years: %d\\n" , years); \n \xa0\xa0\xa0\xa0 printf ( "Weeks: %d\\n" , weeks); \n \xa0\xa0\xa0\xa0 printf ( "Days: %d \\n" , days); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n', 'tags': '', 'url': 'C7..html'}, {'title': 'C8.', 'text': '#include <stdio.h> \n int   main() { \n \xa0\xa0\xa0\xa0 // Define an enumeration type \'week\' \n \xa0\xa0\xa0\xa0 enum   week {Sun, Mon, Tue, Wed, Thu, Fri, Sat}; \n \xa0 \n \xa0\xa0\xa0\xa0 // Print the values of the days using the enumeration constants \n \xa0\xa0\xa0\xa0 printf ( "Sun = %d" , Sun); \n \xa0\xa0\xa0\xa0 printf ( "\\nMon = %d" , Mon); \n \xa0\xa0\xa0\xa0 printf ( "\\nTue = %d" , Tue); \n \xa0\xa0\xa0\xa0 printf ( "\\nWed = %d" , Wed); \n \xa0\xa0\xa0\xa0 printf ( "\\nThu = %d" , Thu); \n \xa0\xa0\xa0\xa0 printf ( "\\nFri = %d" , Fri); \n \xa0\xa0\xa0\xa0 printf ( "\\nSat = %d" , Sat); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n', 'tags': '', 'url': 'C8..html'}, {'title': 'C9.', 'text': '#include <stdio.h> \n int   main() { \n \xa0\xa0\xa0\xa0 int   i, j, flag, ip = 0; \n \xa0 \n \xa0\xa0\xa0\xa0 // Print a message indicating the purpose of the program \n \xa0\xa0\xa0\xa0 printf ( "The prime numbers between 1 and 199 are:\\n" ); \n \xa0 \n \xa0\xa0\xa0\xa0 // Loop to check prime numbers from 2 to 198 \n \xa0\xa0\xa0\xa0 for   (i = 2; i < 199; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 flag = 1; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // Loop to check if i is divisible by any number other than 1 and itself \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   (j = 2; j <= i / 2 && flag == 1; j++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (i % j == 0) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 flag = 0; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // If i is prime, print it \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (flag == 1) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 printf ( "%5d " , i); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ip++; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // Print a newline character after every 10 prime numbers \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (ip % 10 == 0) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 printf ( "\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 printf ( "\\n" ); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n', 'tags': '', 'url': 'C9..html'}, {'title': 'C10.', 'text': '#include <stdio.h> \n #define N 10 \n \xa0 \n int   main() { \n \xa0\xa0 char   chr; \n \xa0\xa0 printf ( "\\n" ); \n \xa0\xa0 \xa0 \n \xa0\xa0 // Loop through ASCII values from 65 (\'A\') to 122 (\'z\') \n \xa0\xa0 for   (chr = 65; chr <= 122; chr = chr + 1) { \n \xa0\xa0\xa0\xa0 // Exclude characters between \'Z\' and \'a\' \n \xa0\xa0\xa0\xa0 if   (chr > 90 && chr < 97) \n \xa0\xa0\xa0\xa0\xa0\xa0 continue ; \n \xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 printf ( "[%2d-%c] " , chr, chr); \n \xa0\xa0 } \n \xa0\xa0 \xa0 \n \xa0\xa0 return   0; \n } \n \n', 'tags': '', 'url': 'C10..html'}, {'title': 'C_EX', 'text': '', 'tags': '', 'url': 'C_EX.html'}, {'title': 'EX1', 'text': '#include <stdio.h> int main() { int a = 10, b = 5; printf( " a == b is %d \\n", a == b ); printf( " a > b is %d \\n", a > b ); printf( " a < b is %d \\n", a < b ); printf( " a >= b is %d \\n", a >= b ); printf( " a <= b is %d \\n", a <= b ); printf( " a != b is %d \\n", a != b ); printf( "\\n" ); b = 10; printf( " a == b is %d \\n", a == b ); printf( " a > b is %d \\n", a > b ); printf( " a < b is %d \\n", a < b ); printf( " a >= b is %d \\n", a >= b ); printf( " a <= b is %d \\n", a <= b ); printf( " a != b is %d \\n", a != b ); return 0; } \n \n', 'tags': '', 'url': 'EX1.html'}, {'title': 'EX2', 'text': '#include<stdio.h> void main() { int a,b; a = 15; b = 1; printf("%d \\n", a | b ); /* a OR b */ printf("%d \\n", a & b ); /* a AND b */ printf("%d \\n", a ^ b ); /* a XOR b */ printf("%d \\n", a << 1 ); /* a 位元左移 1 位 */ printf("%d \\n", a >> 1 ); /* a 位元右移一位 */ printf("%d \\n", ~a ); /* A 的補數運算 */ } \n \n', 'tags': '', 'url': 'EX2.html'}, {'title': 'EX3', 'text': '#include<stdio.h> int main() { int a,b; a = 10; b = 3; printf( "%d \\n", a * b ); printf( "%d \\n", a / b ); printf( "%d \\n", a + b ); printf( "%d \\n", a - b ); printf( "%d \\n", a % b ); return 0; } \n \n', 'tags': '', 'url': 'EX3.html'}, {'title': 'EX4', 'text': '#include <stdio.h> int main() { char x, y; x = \'a\'; y = (char)97; /* 輸出 x, y, x, 最後一個是以 ASCII 值顯示 y */ printf( " x = %c, y = %c, ASCII of y = %d", x, y, y ); return 0; } \n \n', 'tags': '', 'url': 'EX4.html'}, {'title': 'EX5', 'text': '#include <stdio.h> /* read and display a number */ int main () {  char c;  printf("Enter character: ");  c = getchar(); /* read the character in */  printf("Character entered: ");  putchar(c); /* write the character */  return(0); } \n \n', 'tags': '', 'url': 'EX5.html'}, {'title': 'EX6', 'text': '#include <stdio.h> int main() { int a = 1; int A = 8; int b = 2, c; c = A - a + b; /* 輸出 a, A, b, c 到螢幕 */ printf( "a = %d, A = %d, b = %d, c = %d ", a, A, b, c ); return 0; } \n \n', 'tags': '', 'url': 'EX6.html'}, {'title': 'EX7', 'text': '#include <stdio.h> float circle( int r ); /* 宣告 circle 的 prototype */ void main(){ float answer; answer = circle(8); printf( " 圓周長度是 %f", answer ); } /* ====================  circle 函數, 計算 circle 的圓周長 ==================== */ float circle( int r ) { float result; result = 3.14159 * (double)2 * r; return ( result ); } \n', 'tags': '', 'url': 'EX7.html'}, {'title': 'EX8', 'text': '#include <stdio.h> void main() { printf("%d\\n", 1 && 3 ); printf("%d\\n", 0 && 0 ); printf("%d\\n", 2 && 2 ); } \n \xa0 \n', 'tags': '', 'url': 'EX8.html'}, {'title': 'EX9', 'text': '#include <stdio.h> void main() { int a; a = 3; printf("%d\\n", !a ); a = 0; printf("%d\\n", !a ); } \n \n \n', 'tags': '', 'url': 'EX9.html'}, {'title': 'EX10', 'text': '#include <stdio.h> int main() { /* 印出 Hello World! Bye Bye */ printf("Hello World! "); printf("Bye "); printf("Bye"); return 0; } \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'EX10.html'}]};