import React from "react";

export default function Loading() {
    return (
        <div style={{ width: "100%", height: "100%" }} className="center">
            <div class="breeding-rhombus-spinner">
                <div class="rhombus child-1"></div>
                <div class="rhombus child-2"></div>
                <div class="rhombus child-3"></div>
                <div class="rhombus child-4"></div>
                <div class="rhombus child-5"></div>
                <div class="rhombus child-6"></div>
                <div class="rhombus child-7"></div>
                <div class="rhombus child-8"></div>
                <div class="rhombus big"></div>
            </div>
        </div>
    );
}
