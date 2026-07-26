package com.example.instahub_api.controller;

import com.example.instahub_api.dto.ApiReponse;
import com.example.instahub_api.dto.request.RoleRequest;
import com.example.instahub_api.dto.response.RoleResponse;
import com.example.instahub_api.service.RoleService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class RoleController {
    RoleService roleService;

    @PostMapping
    public ApiReponse<RoleResponse> create(@RequestBody RoleRequest request){
        return ApiReponse.<RoleResponse>builder()
                .result(roleService.create(request))
                .build();
    }

    @GetMapping
    public ApiReponse<List<RoleResponse>> getAll(){
        return ApiReponse.<List<RoleResponse>>builder()
                .result(roleService.getAll())
                .build();
    }

    @DeleteMapping("/{roleId}")
    public ApiReponse<Void> delete(@PathVariable String roleId){
        roleService.delete(roleId);
        return ApiReponse.<Void>builder()
                .message("Delete role successfully")
                .build();
    }


}
