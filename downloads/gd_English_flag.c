#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_union_jack(gdImagePtr img);

int main() {
    // 英國國旗的寬度和高度，可以根據需要調整
    int width = 1200;
    int height = (int)(width * 2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_union_jack(img);

    FILE *outputFile = fopen("./../images/union_jack.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

void draw_union_jack(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    // 設定顏色值
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 255, 0, 0);
    int blue = gdImageColorAllocate(img, 0, 0, 255);

    // 填充整個背景為白色
    gdImageFilledRectangle(img, 0, 0, width, height, white);

    // 畫藍色正方形
    int square_size = width / 5;
    gdImageFilledRectangle(img, (width - square_size) / 2, (height - square_size) / 2, (width + square_size) / 2, (height + square_size) / 2, blue);

    // 畫紅色橫線
    int stripe_height = height / 15;
    gdImageFilledRectangle(img, 0, (height - stripe_height) / 2, width, (height + stripe_height) / 2, red);

    // 畫紅色直線
    int stripe_width = width / 15;
    gdImageFilledRectangle(img, (width - stripe_width) / 2, 0, (width + stripe_width) / 2, height, red);
}
