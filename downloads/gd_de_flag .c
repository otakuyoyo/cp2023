#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_german_flag(gdImagePtr img);

int main() {
    // 德國國旗寬度為 900，高度為 600
    int width = 900;
    int height = 600;

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_german_flag(img);

    FILE *outputFile = fopen("./../images/german_flag_in_gd.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }

    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

void draw_german_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int black, red, gold;

    // 德國國旗橫向分為三個相等的條紋，顏色由上到下為黑、紅、金
    black = gdImageColorAllocate(img, 0, 0, 0);
    red = gdImageColorAllocate(img, 255, 0, 0);
    gold = gdImageColorAllocate(img, 255, 206, 0);

    // 繪製黑色條紋
    gdImageFilledRectangle(img, 0, 0, width, height / 3, black);
    // 繪製紅色條紋
    gdImageFilledRectangle(img, 0, height / 3, width, 2 * height / 3, red);
    // 繪製金色條紋
    gdImageFilledRectangle(img, 0, 2 * height / 3, width, height, gold);
} 